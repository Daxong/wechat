package sdfx.wechatlogin;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import sdfx.dao.NewsDao;
import sdfx.model.Customer;
import sdfx.model.FundChart;

/**
 * Servlet implementation class showDescfundServlet
 */
@WebServlet(name = "showDescfund", urlPatterns = { "/showDescfund" })
public class showDescfundServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public showDescfundServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		int id = Integer.parseInt(request.getParameter("id"));
		System.out.println("id="+id);
		NewsDao dao=new NewsDao();
		FundChart chart= dao.getFundChart(id);
		HttpSession session=request.getSession();
		session.setAttribute("chart", chart);
		
		String card_no= (String) session.getAttribute("card_no");
		Customer number=dao.getNumber(id,card_no);
		session.setAttribute("number", number);
		List<String> Tlist=chart.getTradedate();
		List<Double> Ylist=chart.getFqNav();
		List<String> newXlist=CommonUtil.changeX(Tlist, 10);
		List<Double> newYlist=CommonUtil.changeY(Ylist, 10);
		session.setAttribute("newXlist", newXlist);
		session.setAttribute("newYlist", newYlist);
		
		System.out.println(session.getAttribute("customer").toString());
		request.getRequestDispatcher("/desc.jsp").forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
