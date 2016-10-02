package sdfx.wechatlogin;

import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;



import sdfx.dao.NewsDao;
import sdfx.model.Newslist;
import sdfx.util.JDBCUtil;



/**
* 类名: OAuthServlet </br>
* 描述: 授权后的回调请求处理 </br>
* 开发人员： souvc </br>
* 创建时间：  2015-11-27 </br>
* 发布版本：V1.0  </br>
 */
@WebServlet("/OAuth")
public class OAuthServlet extends HttpServlet {
	
    private static final long serialVersionUID = -1847238807216447030L;
    //获取到用户oppenid
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("utf-8");
        response.setCharacterEncoding("utf-8");
       
        // 用户同意授权后，能获取到code
        String code = request.getParameter("code");
        System.out.println("code="+code);
        String openId=null;
        // 用户同意授权
        //拿到code可以获取到openid
        if (!"authdeny".equals(code)) {
            // 获取网页授权access_token
            WeixinOauth2Token weixinOauth2Token = AdvancedUtil.getOauth2AccessToken("wx754e65b42aa3a38b", "ca5f16483af3492ccb7d661c08d3a790", code);
            // 网页授权接口访问凭证
            String accessToken = weixinOauth2Token.getAccessToken();
            // 用户标识
             openId = weixinOauth2Token.getOpenId();
            // 设置要传递的参数
            System.out.println("openid="+openId);
           
            //request.setAttribute("state", state);
        }
		request.setAttribute("openid", openId);
        // 跳转到index.jsp
       doPost(request, response);
    }
    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	String path=request.getContextPath();
    	String openid=(String) request.getAttribute("openid");
    	System.out.println("获取到openid"+openid);
    	Connection conn2=JDBCUtil.getUrl2Connection();
    	Statement st2=null;
    	//此处要加密openid
    	String str=ParseMd5.textToMD5L32(openid);
    	System.out.println("加密之后的openid＝"+str);
    	//select语句，将手机号mobile从数据库读出
		String select="select ID from account where WX_ID=\""+str+"\"";
		ResultSet rs2=null;
		HttpSession session=request.getSession();
		try {
			st2=conn2.createStatement();
			rs2 = st2.executeQuery(select);
			// 如果存在就代表是本公司客户
    	if(rs2.next()){
			//将mobile存入session 
    		session.setAttribute("user_id", rs2.getInt("ID"));
    		
    		
    		request.getRequestDispatcher(path+"/ShowChart").forward(request, response);
    		
    		
    		JDBCUtil.close(conn2, st2, rs2);
    		return;
    	}else{
    		response.sendRedirect(path+"/login.jsp");
    		return;
    	}
         
		} catch (SQLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		//首次登录获取客户手机号
		String phone =request.getParameter("phone");
    	String password =request.getParameter("password");
    	String pass=ParseMd5.textToMD5L32(password);
    	Connection conn=JDBCUtil.getConnection();
    	String sql="select user_id from w_era_user where mobile=\""+phone+"\" and salt=\'"+pass+"\'";
    	try {
			Statement st= conn.createStatement();
			ResultSet rs=st.executeQuery(sql);
			int user_id;
			if(rs.next()){
				user_id=rs.getInt("user_id");
				//将用户openid和手机号存入account表
				String insert="INSERT INTO account ('WX_ID','ID') values(\'"+openid+"\',\'"+user_id+"\')";
				boolean bool=st2.execute(insert);
				System.out.println("存入acount："+bool);
				JDBCUtil.close(conn2, st2);
				JDBCUtil.close(conn, st, rs);
				
				session.setAttribute("user_id", user_id);
				//登陆成功 跳转到ShowDeep
				request.getRequestDispatcher("/ShowDeep.jsp").forward(request, response);
			}else{
				//登陆失败 跳转到DeepHandpick.jsp 由js跳转
				session.setAttribute("error", "error");
				response.sendRedirect(path+"/DeepHandpick.jsp");
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	 request.setCharacterEncoding("utf-8");
         response.setCharacterEncoding("utf-8"); 
         request.getRequestDispatcher("/ShowDeep").forward(request, response);
         return;
         
    	
    	
    }
}