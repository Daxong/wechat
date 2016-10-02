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

	<title>时代复兴—产品详情</title>

	<meta name="keywords" content="时代复兴-北京时代复兴投资管理有限公司">

	<meta name="description" content="时代复兴-北京时代复兴投资管理有限公司">



    <link href="./more/bootstrap.min.css" rel="stylesheet">
	<link href="./more/jquery.fancyspinbox.css" rel="stylesheet" type="text/css">
    <link href="./more/style.css" rel="stylesheet">
    <script type="text/javascript" src="./News/jquery-1.10.1.min.js"></script>
 	<script type="text/javascript" src="./more/Chart-1.0.1-beta.4.js"></script>
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

                  <div class="col-md-6 col-sm-6 col-xs-6 text-right"><h5>产品详情<br>Product</h5></div>

              </div>

          </div>

      </div>
<script>
	function aa(e){
		var id=e.getAttribute("id");
		alert(id+"id");
	}
	</script>
<div id="common" class="container re-team">
   <div class="panel panel-default">

          <div class="panel-heading" style="width:100%;">

              <h2 class="panel-title">客户信息</h2>

          </div>
   <table class="table table-bordered product-table-head"  >
	 <tr>
	  	<th>客户姓名 </th>
	 	<td>${sessionScope.customer.name }</td>
	 </tr>
	 <tr>
	 	<th>身份证号</th>
	  	<td>${customer.card_no}</td>
	 </tr>
	  <tr>
		 <th>当前份额(万)</th>
		 <td id="number">${number.number}</td>
	 </tr>
	 <tr>
		 <th>产品名称</th>
		 <td >
			
			${number.product_name }
		</td>
	 </tr>

	</table>
	</div>
	

	
	
	
	<div class="panel panel-default">

          <div class="panel-heading" style="width:100%;">

              <h2 class="panel-title">净值评价</h2>

          </div>
	<table class="table table-bordered product-table-head">


	 <tr>
	  	<th>开始日期</th><th>结束日期</th><th>累计净值</th><th>累计收益率</th>

	 </tr>
	 <tr>
	 	<td id="startDay">${chart.startDay }</td><td id="endDay">${chart.endDay}</td><td id="maxFaNav">${chart.maxFaNav}</td><td id="totalpchg">${chart.totalpchg}</td>
	 </tr>

	 <tr>
		 <th>年化收益率</th><th>夏普比率</th><th>索提诺比率</th><th>最大回撤</th>

	 </tr>
	 <tr>
		 <td id="yearProfit">${chart.yearProfit}</td>
		 <td id="sharpRatio">${chart.sharpRatio}</td>
		 <td id="stnratio">${chart.stnratio}</td>
		 <td id="maxNavRetraction">${chart.maxNavRetraction}</td>
	 </tr>

	</table>
	</div>
	<!-- 插入净值图 --> <div class="panel panel-default">

          <div class="panel-heading" style="width:100%;">

              <h2 class="panel-title">净值曲线图</h2>

          </div>
		<canvas id="myChart" ></canvas>

	</div>


	

 </div>




 <script>
	$('#my-menu').fancyspinbox();
</script>
 <script type="text/javascript">

 $("common").bind("resize",can());

 function can(){
	 var width = $("#common").width();
	 $("canvas").attr("width",width);
 }
 var tradedate=${newXlist};
 var fqNav=${newYlist};
 var data = {
			labels : tradedate,
			datasets : [
				{
					fillColor : "rgba(51,161,201,0.5)",
					strokeColor : "rgba(24,71,133,1)",
					pointColor : "rgba(66,110,180,1)",
					pointStrokeColor : "#fff",
					data : fqNav
				}
			]
		}

		var ctx = $("#myChart").get(0).getContext("2d");
		var myNewChart = new Chart(ctx).Line(data);
 </script>

</body></html>
