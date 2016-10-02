<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <% String path=request.getContextPath(); %>
<!DOCTYPE html>
<!-- saved from url=(0050)http://www.renaissance-era.com/people_list/78.html -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

	<meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">

	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

	<title>时代复兴—登录中心</title>

	<meta name="keywords" content="时代复兴-北京时代复兴投资管理有限公司">

	<meta name="description" content="时代复兴-北京时代复兴投资管理有限公司">



    <link href="./more/bootstrap.min.css" rel="stylesheet">

    <link href="./more/style.css" rel="stylesheet">



<body>


      <div class="heading-banner re-top">

          <div class="container">

              <div class="row">

                  <div class="col-md-6 col-sm-6 col-xs-6"><h5>Renaissance<br>Era</h5></div>

                  <div class="col-md-6 col-sm-6 col-xs-6 text-right"><h5>登录中心<br>Login</h5></div>

              </div>

          </div>

      </div>

      <div class="container re-team" >



           <div  style=" margin:0 auto;  text-align: center;  background: #ffffff; ">
			<!-- <h2 ><img src="./css/logo.png"></h2> -->
			<div ><br><br></div>
			<div class="location"></div>
			<form action="/wechat/OAuth" method="post" style="padding: 0% 1%">
				<input style="width: 75%;padding: 1em 1em 1em 2em;color: #ffffff;font-size: 13px;outline: none;font-weight: 500;border: none;font-family: 'Open Sans', sans-serif; margin:0 0;background:#474a55;" type="text" class="text" name="phone" value="" onfocus="this.value = '';" placeholder="请输入手机号" >
				<input style="width: 75%;padding: 1em 1em 1em 2em;color: #ffffff;font-size: 13px;outline: none;font-weight: 500;border: none;font-family: 'Open Sans', sans-serif; margin:0.7em 0;background:#474a55;" type="password" name="password" value="" onfocus="this.value = '';"placeholder="请输入密码" >
				<div class="submit">
					<input style="font-size: 20px;font-weight: 300;color: #fff;cursor: pointer;outline: none;padding: 7px 5px;width:75%;border:3px solid #214d74;background: #214d74;" type="submit" onclick="myFunction()" value="登录" >
				</div>
				<div class="clear"></div>
				
			</form>
		</div>

 	  </div>

</body></html>