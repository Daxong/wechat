package sdfx.wechatlogin;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import sdfx.dao.NewsDao;
import sdfx.model.Customer;

/**
 * Servlet implementation class showfundServlet
 */
@WebServlet("/showfund")
public class showfundServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public showfundServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session=request.getSession();
		int user_id= (int) session.getAttribute("user_id");
		NewsDao dao=new NewsDao();
		Customer customer=dao.getCustInfo(user_id);
		System.out.println(customer.getName());
		List list=new ArrayList();
		Map<Integer,String> map=customer.getProduct();//获取基金id和名字
		for (Integer key : customer.getProduct().keySet()) {  
			list.add(dao.getFundInfo(key));//根据基金id获取基金信息
		}  
		session.setAttribute("list", list);
		session.setAttribute("customer", customer);
		session.setAttribute("card_no", customer.getCard_no());//身份证号存一下
		request.getRequestDispatcher("/custfund.jsp").forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
