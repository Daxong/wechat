<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	String path=request.getContextPath();
	 %>
	 <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<!-- saved from url=(0050)http://www.renaissance-era.com/people_list/78.html -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

	<meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">

	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

	<title>时代复兴—我的产品</title>

	<meta name="keywords" content="时代复兴-北京时代复兴投资管理有限公司">

	<meta name="description" content="时代复兴-北京时代复兴投资管理有限公司">



    <link href="./more/bootstrap.min.css" rel="stylesheet">
	<link href="./more/jquery.fancyspinbox.css" rel="stylesheet" type="text/css">
    <link href="./more/style.css" rel="stylesheet">
    <script type="text/javascript" src="./News/jquery-1.10.1.min.js"></script>
 	
 	<script type="text/javascript" src="./more/jquery.fancyspinbox.js"></script>
<script type="text/javascript">
var login="${sessionScope.ok}";
if(login!="ok"){

	//先注释掉
	/* var r=confirm("您还未登录，请登录后查看"); */
	/* if (r==true){
		//转向登录页面
	 	location.href="<%=path%>/login.jsp";
	  }else{
		//不登录 转向ShowDeep
		location.href="<%=path%>/ShowDeep";
	  }  */
}


</script>


<body>


	<div class="heading-banner re-top">

          <div class="container">

              <div class="row">

                  <div class="col-md-6 col-sm-6 col-xs-6"><h5>Renaissance<br>Era</h5></div>

                  <div class="col-md-6 col-sm-6 col-xs-6 text-right"><h5>我的产品<br>Product</h5></div>

              </div>

          </div>

      </div>

<div id="common" class="container re-team">
`	/*温馨提示：点击基金名字可以查看基金详细信息*/
	<c:forEach var="news" items="${sessionScope.list}" varStatus="c">
	<div class="panel panel-default">

          <div class="panel-heading" style="width:100%;">

              <h2 class="panel-title"><a href="<%=path %>/showDescfund?id=${news.product_id}">${news.title}<a></h2>

          </div>
     <table class="table table-bordered product-table-head"  >
	 
	 <tr>
		 <th>发行管理人</th>
		 <td id="fundManager">${news.fundManager}</td>
	 </tr>
	   <tr>
		 <th>托管人</th>
		 <td id="fdTrustee">${news.fdTrustee}</td>
	 </tr>
	  <tr>
		 <th>投资顾问</th>
		 <td id="fdinvestAdviser">${news.fdinvestAdviser}密密麻麻</td>
	 </tr>
	 <tr>
		 <th>产品类型</th>
		 <td id="fdRiskType">${news.fdRiskType=='1' ? '稳健类型':''} ${news.fdRiskType=='2' ? '成长类型':''} ${news.fdRiskType=='3' ? '进取类型':''}</td>
	 </tr>
	<tr>
		 <th>产品状态</th>
		 <td id="fdStatus">${news.fdStatus}</td>
	 </tr>
	
	</table>
	<table class="table table-bordered product-table-head"  >
	 
	 
	 <tr>
	 	<th>投资范围</th>
	 </tr>
	  <tr>
	 	<td>${news.desc }</td>
	 </tr>
	 <tr>
	 	<th>投资策略</th>
	 </tr>
	  <tr>
	 	<td>${news.desc }</td>
	 </tr>
	</table>
	</div>
	</c:forEach>
	

 </div>

</body></html>
