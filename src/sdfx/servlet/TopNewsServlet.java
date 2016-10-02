package sdfx.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import sdfx.dao.NewsDao;
import sdfx.model.Newslist;
import sdfx.model.PartnerList;

/**
 * Servlet implementation class TopNewsServlet
 */
@WebServlet("/TopNews")
public class TopNewsServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public TopNewsServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		NewsDao dao=new NewsDao();
		List<Newslist> list =null;
		List<PartnerList> partner=null;
		String name= request.getParameter("page");
		
		if("时代交易".equals(name)){
			list=dao.getNewsList();			
		}else if("时代动态".equals(name)){
			list=dao.getStatusNews();
		}else if("时代分享".equals(name)){
			list=dao.getShareNews();
		}else if("时代观点".equals(name)){
			list=dao.getPoint();
		}else if("时代报告".equals(name)){
			list=dao.getReport();
		}else if("时代产品".equals(name)){
			list=dao.getProduct();
		}else if("关于我们".equals(name)){
			list=dao.getAbout();
		}else if("时代伙伴".equals(name)){
			partner=dao.getPartner();
		}else if("时代睿人".equals(name)){
			list=dao.getWise();
		}
		
		JSONObject ro=new JSONObject();
		JSONArray array=new JSONArray();
		
		if(list!=null){
			for(int i=0;i<list.size();i++){
				JSONObject json=new JSONObject();
				json.put("id", list.get(i).getId());
				json.put("org_id", list.get(i).getOrg_id());
				json.put("creator_id", list.get(i).getCreator_id());
				
				json.put("title", list.get(i).getTitle());
				json.put("desc", list.get(i).getDesc());
				
				json.put("author", list.get(i).getAuthor());
				json.put("small_image", list.get(i).getSmall_image());
				json.put("mobile_image", list.get(i).getMobile_image());
				json.put("link", list.get(i).getLink());
				json.put("content", list.get(i).getContent());
				
				
				SimpleDateFormat simpleDateFormat =new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			    Date date=null;
				try {
					date = simpleDateFormat .parse(list.get(i).getPublish_date().toString());
					long timeStemp =  date.getTime();
					json.put("publish_date", timeStemp);
				} catch (ParseException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				array.add(json);
				
			}
		}else if(partner!=null){
			for(int i=0;i<partner.size();i++){
				JSONObject json=new JSONObject();
				json.put("id", partner.get(i).getId());
				json.put("TYPE", partner.get(i).getType());
				json.put("type_name", partner.get(i).getType_name());				
				json.put("NAME", partner.get(i).getName());
				json.put("url", partner.get(i).getUrl());				
				json.put("seq", partner.get(i).getSeq());
				json.put("logo", partner.get(i).getLogo());
				
				array.add(json);				
			}
		}		
		ro.put("array", array);
		response.setCharacterEncoding("utf-8");
		response.setContentType("application/json;charset=utf-8");
		
		PrintWriter out=response.getWriter();
		out.write(ro.toString());
		out.flush();
//		String name=request.getParameter("top");
//		if("top")
//		request.setAttribute("topnews", list);
//		request.getRequestDispatcher("/NewFile.jsp").forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
