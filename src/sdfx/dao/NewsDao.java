package sdfx.dao;

import java.math.RoundingMode;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import sdfx.model.Customer;
import sdfx.model.FundChart;
import sdfx.model.Newslist;
import sdfx.model.PartnerList;
import sdfx.util.JDBCUtil;

public class NewsDao {
//获取时代交易列表
public List<Newslist> getNewsList(){
		
		Statement st=null;
		ResultSet rs=null;
		Connection conn=JDBCUtil.getConnection();
		List<Newslist> newslist=new ArrayList<Newslist>();
		try {
			st=conn.createStatement();
			rs=st.executeQuery("select * from w_trading_strategy");
			while(rs.next()){
				Newslist list=new Newslist();
				list.setId(rs.getInt("id"));
				list.setOrg_id(rs.getInt("org_id"));
				list.setCreator_id(rs.getInt("creator_id"));
				list.setPublish_date(rs.getTimestamp("publish_date"));
				list.setTitle(rs.getString("title"));
				list.setAuthor(rs.getString("author"));
				list.setLink(rs.getString("link"));
				list.setSmall_image(rs.getString("small_image"));
				list.setMobile_image(rs.getString("mobile_image"));
				list.setDesc(rs.getString("desc"));
				
				newslist.add(list);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			JDBCUtil.close(conn, st, rs);
		}
		
		return newslist;
		
	}

//获取时代动态列表
public List<Newslist> getStatusNews(){
	
	Statement st=null;
	ResultSet rs=null;
	Connection conn=JDBCUtil.getConnection();
	List<Newslist> newslist=new ArrayList<Newslist>();
	try {
		st=conn.createStatement();
		rs=st.executeQuery("select * from w_company_news");
		while(rs.next()){
			Newslist list=new Newslist();
			list.setId(rs.getInt("id"));
			list.setOrg_id(rs.getInt("org_id"));
			list.setCreator_id(rs.getInt("creator_id"));
			list.setPublish_date(rs.getTimestamp("publish_date"));
			list.setTitle(rs.getString("title"));
			list.setAuthor(rs.getString("author"));
			list.setLink(rs.getString("link"));
			list.setSmall_image(rs.getString("small_image"));
			list.setMobile_image(rs.getString("mobile_image"));
			list.setDesc(rs.getString("desc"));
			newslist.add(list);
		}
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}finally{
		JDBCUtil.close(conn, st, rs);
	}
	return newslist;
	
}
//获取时代分享列表
public List<Newslist> getShareNews(){
	
	Statement st=null;
	ResultSet rs=null;
	Connection conn=JDBCUtil.getConnection();
	List<Newslist> newslist=new ArrayList<Newslist>();
	try {
		st=conn.createStatement();
		rs=st.executeQuery("select * from w_era_share");
		while(rs.next()){
			Newslist list=new Newslist();
			list.setId(rs.getInt("id"));
			list.setOrg_id(rs.getInt("org_id"));
			list.setCreator_id(rs.getInt("creator_id"));
			list.setPublish_date(rs.getTimestamp("publish_date"));
			list.setTitle(rs.getString("title"));
			list.setAuthor(rs.getString("author"));
			list.setLink(rs.getString("link"));
			list.setSmall_image(rs.getString("small_image"));
			list.setMobile_image(rs.getString("mobile_image"));
			list.setDesc(rs.getString("desc"));
			newslist.add(list);
		}
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}finally{
		JDBCUtil.close(conn, st, rs);
	}
	return newslist;
	
}
//获取时代观点列表
public List<Newslist> getPoint(){
	
	Statement st=null;
	ResultSet rs=null;
	Connection conn=JDBCUtil.getConnection();
	List<Newslist> newslist=new ArrayList<Newslist>();
	try {
		st=conn.createStatement();
		rs=st.executeQuery("select * from w_era_viewpoint");
		while(rs.next()){
			Newslist list=new Newslist();
			list.setId(rs.getInt("id"));
			list.setOrg_id(rs.getInt("org_id"));
			list.setCreator_id(rs.getInt("creator_id"));
			list.setPublish_date(rs.getTimestamp("publish_date"));
			list.setTitle(rs.getString("title"));
			list.setAuthor(rs.getString("author"));
			list.setLink(rs.getString("link"));
			list.setSmall_image(rs.getString("small_image"));
			list.setMobile_image(rs.getString("mobile_image"));
			list.setDesc(rs.getString("desc"));
			newslist.add(list);
		}
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}finally{
		JDBCUtil.close(conn, st, rs);
	}
	return newslist;
	
}
//获取时代报告列表
public List<Newslist> getReport(){
	
	Statement st=null;
	ResultSet rs=null;
	Connection conn=JDBCUtil.getConnection();
	List<Newslist> newslist=new ArrayList<Newslist>();
	try {
		st=conn.createStatement();
		rs=st.executeQuery("select * from w_era_report");
		while(rs.next()){
			Newslist list=new Newslist();
			list.setId(rs.getInt("id"));
			list.setOrg_id(rs.getInt("org_id"));
			list.setCreator_id(rs.getInt("creator_id"));
			list.setPublish_date(rs.getTimestamp("publish_date"));
			list.setTitle(rs.getString("title"));
			list.setAuthor(rs.getString("author"));
			list.setLink(rs.getString("link"));
			list.setSmall_image(rs.getString("small_image"));
			list.setMobile_image(rs.getString("mobile_image"));
			list.setDesc(rs.getString("desc"));
			newslist.add(list);
		}
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}finally{
		JDBCUtil.close(conn, st, rs);
	}
	return newslist;
	
}
//还未实现
public List<Newslist> getProduct(){
	
	Statement st=null;
	ResultSet rs=null;
	Connection conn=JDBCUtil.getConnection();
	List<Newslist> newslist=new ArrayList<Newslist>();
	try {
		st=conn.createStatement();
		rs=st.executeQuery("select * from v_w_era_productclass");
		while(rs.next()){
			Newslist list=new Newslist();
			list.setId(rs.getInt("id"));
			list.setOrg_id(rs.getInt("org_id"));
			list.setCreator_id(rs.getInt("creator_id"));
			list.setPublish_date(rs.getTimestamp("publish_date"));
			list.setTitle(rs.getString("title"));
			list.setAuthor(rs.getString("author"));
			list.setLink(rs.getString("link"));
			list.setSmall_image(rs.getString("small_image"));
			list.setMobile_image(rs.getString("mobile_image"));
			list.setDesc(rs.getString("desc"));
			newslist.add(list);
		}
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}finally{
		JDBCUtil.close(conn, st, rs);
	}
	return newslist;
	
}

public List<Newslist> getAbout(){
	
	Statement st=null;
	ResultSet rs=null;
	Connection conn=JDBCUtil.getConnection();
	List<Newslist> newslist=new ArrayList<Newslist>();
	try {
		st=conn.createStatement();
		rs=st.executeQuery("select * from w_about_us ");
		while(rs.next()){
			Newslist list=new Newslist();
			list.setId(rs.getInt("id"));
			list.setOrg_id(rs.getInt("org_id"));
			list.setCreator_id(rs.getInt("creator_id"));
			list.setPublish_date(rs.getTimestamp("publish_date"));
			list.setTitle(rs.getString("title"));
			list.setAuthor(rs.getString("author"));
			list.setSmall_image(rs.getString("small_image"));
			list.setMobile_image(rs.getString("mobile_image"));
			list.setDesc(rs.getString("desc"));
			list.setContent(rs.getString("content"));
			newslist.add(list);
		}
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}finally{
		JDBCUtil.close(conn, st, rs);
	}
	return newslist;
}

public List<Newslist> getWise(){
	
	Statement st=null;
	ResultSet rs=null;
	Connection conn=JDBCUtil.getConnection();
	List<Newslist> newslist=new ArrayList<Newslist>();
	try {
		st=conn.createStatement();
		rs=st.executeQuery("select * from w_era_people ");
		while(rs.next()){
			Newslist list=new Newslist();
			list.setId(rs.getInt("id"));
			list.setOrg_id(rs.getInt("org_id"));
			list.setCreator_id(rs.getInt("creator_id"));
			list.setPublish_date(rs.getTimestamp("publish_date"));
			list.setTitle(rs.getString("title"));
			list.setAuthor(rs.getString("author"));
			list.setLink(rs.getString("link"));
			list.setSmall_image(rs.getString("small_image"));
			list.setMobile_image(rs.getString("mobile_image"));
			list.setDesc(rs.getString("desc"));
			newslist.add(list);
		}
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}finally{
		JDBCUtil.close(conn, st, rs);
	}
	return newslist;
}

public List<PartnerList> getPartner(){
	
	Statement st=null;
	ResultSet rs=null;
	Connection conn=JDBCUtil.getConnection();
	List<PartnerList> newslist=new ArrayList<PartnerList>();
	try {
		st=conn.createStatement();
		rs=st.executeQuery("select * from w_era_partner ");
		while(rs.next()){
			PartnerList list=new PartnerList();
			list.setId(rs.getInt("id"));
			list.setType(rs.getInt("TYPE"));
			list.setType_name(rs.getString("type_name"));
			list.setName(rs.getString("NAME"));
			list.setUrl(rs.getString("url"));
			list.setSeq(rs.getInt("seq"));
			list.setLogo(rs.getString("logo"));
			newslist.add(list);
		}
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}finally{
		JDBCUtil.close(conn, st, rs);
	}
	return newslist;
}
/**
 * 获取基金信息
 * */
public Newslist getFundInfo(int product_id){
	
	Statement st=null;
	ResultSet rs=null;
	Connection conn=JDBCUtil.getConnection();
	List<Newslist> newslist=new ArrayList<Newslist>();
	Newslist list=new Newslist();
	try {
		st=conn.createStatement();
		rs=st.executeQuery("select * from v_w_era_product where id="+product_id);
		
		while(rs.next()){
			
			list.setDesc(rs.getString("desc"));//投资范围
			list.setFdinvestAdviser(rs.getString("FdInvestAdviser"));
			list.setFdOpenDate(rs.getDate("FdOpenDate"));
			list.setFdRiskType(rs.getString("FdRiskType"));//产品类型
			list.setFdTrustee(rs.getString("FdTrustee"));//托管人
			list.setFundManager(rs.getString("FundManager"));//基金管理者
			list.setTitle(rs.getString("title"));//基金名字
			list.setInvestStrategry(rs.getString("InvestStrategry"));//投资策略
			list.setRealIssuanceSize(rs.getDouble("RealIssuanceSize"));
			list.setFdStatus(rs.getString("FdStatus"));//产品状态	
			list.setProduct_id(rs.getInt("id"));
		}
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}finally{
		JDBCUtil.close(conn, st, rs);
	}
	return list;
}
//产品查询
//获取客户个人信息 获取用户产品信息
public Customer getCustInfo(int ID) {
	Statement st=null;
	ResultSet rs=null;
	Connection conn=JDBCUtil.getConnection();
	Customer customer=new Customer();
	try {
		st=conn.createStatement();
		rs=st.executeQuery("select customer_name,card_no,product_name,product_id,number from w_buy_detail where customer_id="+ID);
		Map<Integer,String> map=new HashMap<>();
		
		int i=1;
		while(rs.next()){
			if(i>1){
				map.put(rs.getInt("product_id"),rs.getString("product_name"));
				System.out.println("添加product");
				continue;
			}
			map.put(rs.getInt("product_id"),rs.getString("product_name"));
			System.out.println("添加成功");
			customer.setNumber(rs.getInt("number"));
			customer.setCard_no(rs.getString("card_no"));
			customer.setName(rs.getString("customer_name"));	
			i++;	
		}
		customer.setProduct(map);
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	JDBCUtil.close(conn, st, rs);	
	return customer;	
}

public Customer getCustProductw(int ID) {
	Statement st=null;
	ResultSet rs=null;
	Connection conn=JDBCUtil.getConnection();
	Customer customer=new Customer();
	try {
		st=conn.createStatement();
		rs=st.executeQuery("select product_id,product_name from w_buy_detail where customer_id="+ID);
		Map<Integer,String> map=new HashMap<>();
		
		int i=1;
		while(rs.next()){
			map.put(rs.getInt("product_id"),rs.getString("product_name"));

		}
		customer.setProduct(map);
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	JDBCUtil.close(conn, st, rs);	
	return customer;	
}

//获取基金净值
public FundChart getFundChart(int fundid) {
	Connection conn=JDBCUtil.getConnection();
	Statement st=null;
	String sql="SELECT * FROM v_era_fdnav WHERE fundid="+fundid+" ORDER BY tradedate";
	ResultSet rs=null;
	List<String> list=new ArrayList<String>();
	List<Double> fqlist=new ArrayList<Double>();
	FundChart fund=new FundChart();
	int i=1;
	try {
		st=conn.createStatement();
		rs=st.executeQuery(sql);
		while(rs.next()){
			if(i>1){
				list.add(rs.getString("tradedate"));
				fqlist.add(rs.getDouble("fqNav"));
				i++;
				continue;
			}
			list.add(rs.getString("tradedate"));
			fqlist.add(rs.getDouble("fqNav"));
			fund.setStartDay(rs.getString("tradedate"));
			fund.setMaxNavRetraction(rs.getDouble("MaxNavRetraction"));
			fund.setSharpRatio(rs.getDouble("SharpRatio"));
			fund.setStnratio(rs.getDouble("Stnratio"));
			fund.setTotalpchg(rs.getDouble("totalpchg"));
			fund.setTradeDays(rs.getInt("TradeDays"));
			fund.setYearProfit(rs.getDouble("YearProfit"));
			i++;
		}
		if(rs.absolute(i-1)){
			DecimalFormat formater = new DecimalFormat();
	        formater.setMaximumFractionDigits(4);
	        formater.setGroupingSize(0);
	        formater.setRoundingMode(RoundingMode.FLOOR);
	        String dd=formater.format(rs.getDouble("fqNav"));
			fund.setMaxFaNav(Double.parseDouble(dd));
			fund.setEndDay(rs.getString("tradedate"));
		}
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	fund.setTradedate(list);
	fund.setFqNav(fqlist);
	
	JDBCUtil.close(conn, st, rs);
	return fund;
	
}

public Customer getNumber(int fundId,String card_no ){
	Connection conn=JDBCUtil.getConnection();
	Statement st=null;
	String sql="SELECT number,product_name FROM w_buy_detail WHERE card_no='"+card_no+"' and product_id="+fundId;
	ResultSet rs=null;
	Customer customer=new Customer();
	try {
		st=conn.createStatement();
		rs=st.executeQuery(sql);
		if(rs.next()){
			customer.setNumber(rs.getInt("number"));
			customer.setProduct_name(rs.getString("product_name"));
			return customer;
		}
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	
	return customer;
	
}
//产品分类
public List<Newslist> getProductType(int type){
	Statement st=null;
	ResultSet rs=null;
	Connection conn=JDBCUtil.getConnection();
	List<Newslist> newslist=new ArrayList<Newslist>();
	try {
		st=conn.createStatement();
		rs=st.executeQuery("select * from v_w_era_product ");
		while(rs.next()){
			Newslist list=new Newslist();
			list.setDesc(rs.getString("desc"));//投资范围
			list.setFdinvestAdviser(rs.getString("FdInvestAdviser"));
			list.setFdOpenDate(rs.getDate("FdOpenDate"));//开始日期
			list.setFdRiskType(rs.getString("FdRiskType"));//产品类型
			list.setFdTrustee(rs.getString("FdTrustee"));//托管人
			list.setFundManager(rs.getString("FundManager"));//基金管理者
			list.setTitle(rs.getString("title"));//基金名字
			list.setInvestStrategry(rs.getString("InvestStrategry"));//投资策略
			list.setRealIssuanceSize(rs.getDouble("RealIssuanceSize"));
			list.setFdStatus(rs.getString("FdStatus"));//产品状态	
			newslist.add(list);
		}
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}finally{
		JDBCUtil.close(conn, st, rs);
	}
	return newslist;
	
	
	
}
}
