package sdfx.servlet;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import sdfx.dao.NewsDao;
import sdfx.model.Newslist;
import sdfx.wechatlogin.AdvancedUtil;

/**
 * Servlet implementation class ShowDeepServlet
 */
@WebServlet("/ShowDeep")
public class ShowDeepServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ShowDeepServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stu
			NewsDao dao=new NewsDao();
			List<Newslist> list =dao.getPoint();
			request.setAttribute("newslist", list);
			request.setAttribute("ok", "ok");
			request.getRequestDispatcher("/DeepHandpick.jsp").forward(request, response);
			return;
		
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
