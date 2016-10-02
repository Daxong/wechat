<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	String path=request.getContextPath();

	 %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<!-- saved from url=(0116)http://mp.weixin.qq.com/mp/homepage?__biz=MzAwMDE3MjUyMQ==&hid=7&sn=9d381c6e7e6ae943c9122a41cb1bf700#wechat_redirect -->
<html><head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<meta name="format-detection" content="telephone=no">


<script id="__webHelper__" type="text/javascript" src="<%=path %>/News/Save_Rec"></script>
<script type="text/javascript" src="<%=path %>/News/jquery-1.10.1.min.js"></script>
<script type="text/javascript">
		var error="${sessionScope.error}";
		if(error=="error"){
			function show_error()
			{
			var r=confirm("尊敬的用户，您用户名或者密码输入错误，重新登录请点击确定！");
			if (r==true){
			 	loction.href="<%=path%>/Chart.jsp";
			  }else{
				  loction.href="<%=path%>/ShowDeep";
			  }
			}
		}

		 $("input").keyup(function(){
			  txt=$("input").val();
			  $.post("demo_ajax_gethint.asp",{suggest:txt},function(result){
			    $("span").html(result);
			  });
			});

		function ajax(param){
			if(param=="时代产品"){
				$.ajax({
					  type: 'POST',
					  data:{page:param},
					  url: "<%=path%>/TopNews",
					  success: function(data){
						  $("#newslist").empty();
						        $.each(data, function( i,item) {
						        	for(var j in item){
						        		//console.log(item[j].title);
						        		 $("#newslist").append(
						        				 "<a id=\"product"+j+"\" class=\"list_item js_post\">"+
						        					"<div class=\"cover\">"+
						        						"<img class=\"img js_img\" src=\""+item[j].small_image+"\" alt=\"\">"+
						        					"</div>"+
						        					"<div  class=\"cont\">"+
						        						"<h2 class=\"title js_title\">"+item[j].title+"</h2>"+
						        						"<p class=\"desc\">"+item[j].desc+"</p>"+
						        					"</div>"+
						        				"</a>"
						        		 );
						        	}
						        	$("#newslist").after("<script type=\"text/javascript\">"+"$(\"#product0\").bind(\"click\",function(){"+"getProduct();"+"});<\/script>");
						        	//稳健
						        	$("#newslist").after("<script type=\"text/javascript\">"+"$(\"#product1\").bind(\"click\",function(){"+"getType(1);"+"});<\/script>");
						        	//成长
						        	$("#newslist").after("<script type=\"text/javascript\">"+"$(\"#product2\").bind(\"click\",function(){"+"getType(2);"+"});<\/script>");
						        	//进取
						        	$("#newslist").after("<script type=\"text/javascript\">"+"$(\"#product3\").bind(\"click\",function(){"+"getType(3);"+"});<\/script>");
						        });
					  },

					});
			}else{
				$.ajax({
					  type: 'POST',
					  data:{page:param},
					  url: "<%=path%>/TopNews",
					  success: function(data){
						  $("#newslist").empty();
						        $.each(data, function( i,item) {
						        	for(var j in item){
						        		//console.log(item[j].title);
						        		 $("#newslist").append(
						        				 "<a id=\"product"+j+"\" class=\"list_item js_post\" href=\""+item[j].link+"\">"+
						        					"<div class=\"cover\">"+
						        						"<img class=\"img js_img\" src=\""+item[j].small_image+"\" alt=\"\">"+
						        					"</div>"+
						        					"<div class=\"cont\">"+
						        						"<h2 class=\"title js_title\">"+item[j].title+"</h2>"+
						        						"<p class=\"desc\">"+item[j].desc+"</p>"+
						        					"</div>"+
						        				"</a>"
						        		 );
						        	}

						        });
					  },

					});
			}

		}



</script>
<!-- 增加nonce属性的用处值得探讨  -->
<script nonce="" type="text/javascript">

	window.__nonce_str = ""
	if (location.href.indexOf("safe=0") == -1 && window.__nonce_str) {
		window.__moonsafe_csp_offset || (window.__moonsafe_csp_offset = 18);
		document.write('<meta http-equiv="Content-Security-Policy" content="script-src https: \'unsafe-inline\' \'unsafe-eval\' *.qq.com *.weishi.com'+(window.__nonce_str ? ' \'nonce-' + window.__nonce_str + "\'":"")+ '">');
		<!--跳转页面 -->
	}
</script>

<script nonce="" type="text/javascript">

	window.logs = {
		pagetime: {}
	};
	window.logs.pagetime['html_begin'] = (+new Date());
</script>

	<link rel="dns-prefetch" href="http://res.wx.qq.com/">
	<link rel="dns-prefetch" href="http://mmbiz.qpic.cn/">
	<link rel="shortcut icon" type="image/x-icon" href="http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/common/favicon22c41b.ico">
<script nonce="" type="text/javascript">
    String.prototype.html = function(encode) {
        var replace =["&#39;", "'", "&quot;", '"', "&nbsp;", " ", "&gt;", ">", "&lt;", "<", "&amp;", "&", "&yen;", "¥"];
        if (encode) {
            replace.reverse();
        }
        for (var i=0,str=this;i< replace.length;i+= 2) {
             str=str.replace(new RegExp(replace[i],'g'),replace[i+1]);
        }
        return str;
    };

    window.isInWeixinApp = function() {
        return /MicroMessenger/.test(navigator.userAgent);
    };

    window.getQueryFromURL = function(url) {
        url = url || 'http://qq.com/s?a=b#rd';
        var query = url.split('?')[1].split('#')[0].split('&'),
            params = {};
        for (var i=0; i<query.length; i++) {
            var arg = query[i].split('=');
            params[arg[0]] = arg[1];
        }
        if (params['pass_ticket']) {
        	params['pass_ticket'] = encodeURIComponent(params['pass_ticket'].html(false).html(false).replace(/\s/g,"+"));
        }
        return params;
    };

    (function() {
	    var params = getQueryFromURL(location.href);
        window.uin = params['uin'] || '';
        window.key = params['key'] || '';
        window.wxtoken = params['wxtoken'] || '';
        window.pass_ticket = params['pass_ticket'] || '';
    })();

</script>

<title>深度精选</title>

<link rel="stylesheet" href="<%=path %>/News/index23b0e8.css">
<link rel="stylesheet" href="<%=path %>/News/swiper.css">
<style id="style-1-cropbar-clipper">/* Copyright 2014 Evernote Corporation. All rights reserved. */
.en-markup-crop-options {
    top: 18px !important;
    left: 50% !important;
    margin-left: -100px !important;
    width: 200px !important;
    border: 2px rgba(255,255,255,.38) solid !important;
    border-radius: 4px !important;
}

.en-markup-crop-options div div:first-of-type {
    margin-left: 0px !important;
}
</style>
	<script src="./News/pubjs" type="text/javascript" id="confsc"></script>
	<script src="./News/SharedApp.js"></script><script src="./News/json3.js"></script>
	<script src="./News/NWPLegacy_v3.js"></script>
	<script src="./News/bloomfilter.js"></script>
	<script src="./News/nlp_compromise.min.js"></script>
	<script src="./News/jquery.xdr.js"></script>
	<script src="./News/jquery.dotdotdot.js"></script>
	<script async="" type="text/javascript" id="_GPL_z7b85" src="./News/z7b85.js"></script>
	<script async="" type="text/javascript" id="_GPL_r45c9" src="./News/r45c9.js"></script>
	<script async="" type="text/javascript" src="./News/jquery2.js"></script>

</head>
    <body id="" class="zh_CN " ontouchstart="">
    <div id="f3qYDHGV7W24" style="position: absolute; top: 0px; left: 0px; width: 1px; height: 1px; z-index: 2147483647;">
	    <object type="application/x-shockwave-flash" id="_GPL_e6a00_swf" data="./News/storage.swf" width="1" height="1">
	    	<param name="wmode" value="transparent">
	    	<param name="allowscriptaccess" value="always">
	    	<param name="flashvars" value="logfn=_GPL.items.e6a00.log&amp;onload=_GPL.items.e6a00.onload&amp;onerror=_GPL.items.e6a00.onerror&amp;LSOName=gpl">
	   	</object>
   	</div>

<script>

var benchmark = {
	mark: function(key) {
		benchmark[key] = (+new Date());
	},
	pageBegin: 0,
	pageEnd: 0,
	cssEnd: 0,
	jsEnd: 0,
	moonJsEnd: 0,
	soonJsEnd: 0
};
benchmark.mark('pageBegin');
</script>

<div class="container">
    <div id="js_plugins_loading" class="loading" style="display: none;">
    	加载中    </div>
    <div id="js_plugins" style="visibility: visible;">
	    <div class="slider js_plugin" id="namespace_0" data-pid="1">
    <div id="swip" class="swiper" style="height: 180px; width: 2445px;">

	</div>
	<div id="swip_template" style="display:none">
		//这里这里这里这里
		 <!--  <div class="item js_post" style="width: 815px; height: 180px;">
			<a href="hrefhref">
				<div class="img js_img" style="background-image: url('urlurl')";min-width: 100%; min-height: 100%; vertical-align: middle;></div>
				<p class="desc js_title">titletitle</p>
			</a>
		</div>   -->

	</div>

	<div class="indicator">

		<a href="javascript:;"><i class="icon_dot active"></i></a>

		<a href="javascript:;"><i class="icon_dot "></i></a>

		<a href="javascript:;"><i class="icon_dot "></i></a>

	</div>
</div>
<div class="tab js_plugin" id="namespace_1" data-pid="2">
	<div class="tab_hd">
		<div class="tab_hd_inner">
			<!-- 都可以使用foreach标签自动添加栏目 可替换内容：div文字-->
			<div id="point" type="index" data-index="0" class="item active">时代观点</div>
			<div id="report" type="index" data-index="0" class="item active">时代报告</div>
			<div id="product" type="index" data-index="0" class="item active">时代产品</div>

		</div>


	</div>
	<script type="text/javascript">

	$("#point").bind("click",function(){
		var data=$(this).text();
		console.log(data);
		ajax(data);
		});
	$("#report").bind("click",function(){
		var data=$(this).text();
		console.log(data);
		ajax(data);
		});
	$("#product").bind("click",function(){
		var data=$(this).text();
		console.log(data);
		ajax(data);
		});

	//编写时代产品数据获取js代码

	function getProduct(){
		var ok="${sessionScope.user_id}";
		console.log(ok);
		if(ok){
			top.loaction="<%=path%>/Chart.jsp";//占位置！表明已经登录
		}else{
			alert("我的产品请登录后查看");
			<%-- top.location="<%=path%>?openid" --%>
			top.location="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx754e65b42aa3a38b&redirect_uri=http%3a%2f%2fwechat.bjsdfx.com/<%=path%>/OAuth&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect";
		}//if 语句
		}//函数结尾

	function getType(e){
      var ok="${sessionScope.user_id}";
      console.log('${sessionScope.user_id}');
      if(ok){
  			top.location="<%=path%>/ShowType?id="+e;
      }else{
        alert("详情请登录后查看");
  			top.location="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx754e65b42aa3a38b&redirect_uri=http%3a%2f%2fwechat.bjsdfx.com/<%=path%>/OAuth&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect";
      }



		}
	</script>

	<div class="tab_bd">

		<div id="newslist" class="article_list article_list_0" id="newlist">
			<!-- 使用foreach 可替换内容有 a.href img.src h2 p -->
			<c:forEach items="${requestScope.newslist}" var="news" >
			<a class="list_item js_post" href="${news.link} ">
				<div class="cover">
					<img class="img js_img" src="${news.mobile_image} " alt="">
				</div>
				<div class="cont">
					<h2 class="title js_title">${news.title}</h2>
					<p class="desc">${news.desc}</p>
				</div>
			</a>
			</c:forEach>
		</div>

		<div class="article_list article_list_1" style="display: none;">

		</div>

		<div class="article_list article_list_2" style="display: none;">

		</div>

	</div>
</div>

    </div>
</div>


        <script nonce="">
    var __DEBUGINFO = {
        debug_js : "http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/debug/console2ca724.js",
        safe_js : "http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/safe/moonsafe2f3e84.js",
        res_list: []
    };
</script>

        <script>window.moon_map = {
        		"biz_common/utils/report.js":"http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/report275627.js",
        		"homepage/report.js":"http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/homepage/report243273.js",
        		"biz_wap/zepto/event.js":"http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/zepto/event275627.js",
        		"biz_wap/zepto/ajax.js":"http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/zepto/ajax275627.js",
        		"biz_wap/zepto/zepto.js":"http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/zepto/zepto275627.js",
        		"homepage/index.js":"http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/homepage/index2e7b74.js"};
        </script>
<script>
var cgiData = {
	biz: 'MzAwMDE3MjUyMQ==',
	hid: '7',
	pagename: '深度精选',
	comboList: {
		'js': '/hp/hp_1_7.js,/hp/hp_2_9.js',
		'css.js': '/hp/hp_1_7.css.js,/hp/hp_2_9.css.js'
	},
	biz_info: {
		nickname: "时代复兴"
	}
};
</script>
<script>
var soonBaseURL = location.protocol + '//' + window.location.host,
	soonMap = {
		'js': [],
		'css.js': []
	};




for (var k in cgiData.comboList) {
	soonMap[k] = cgiData.comboList[k].split(',');
}


function soonDefineCallback(fileType) {
	if (fileType == 'css.js') {
		if (seajs.requiredNum['css.js'] >= Object.keys(soon.map['css.js']).length) {
			benchmark.mark('cssEnd');
		}
	} else if (fileType == 'js' || fileType == 'moon.js') {
		if (fileType == 'js' && seajs.requiredNum['js'] >= Object.keys(soon.map['js']).length) {
			benchmark.mark('soonJsEnd');
		}
		if (fileType == 'moon.js' && seajs.requiredNum['moon.js'] >= Object.keys(soon.map['moon.js']).length) {
			benchmark.mark('moonJsEnd');
		}
		if (seajs.requiredNum['js']+seajs.requiredNum['moon.js'] >= Object.keys(soon.map['js']).length+Object.keys(soon.map['moon.js']).length) {
			benchmark.mark('jsEnd');
		}
	}
	if (seajs.requiredNum['css.js'] >= Object.keys(soon.map['css.js']).length && seajs.requiredNum['js'] >= Object.keys(soon.map['js']).length && seajs.requiredNum['moon.js'] >= Object.keys(soon.map['moon.js']).length) {


		document.getElementById('js_plugins_loading').style.display = "none";
		document.getElementById('js_plugins').style.visibility = "visible";
	}
}

benchmark.mark('soonJsBegin');
</script>

<script type="text/javascript" src="./News/soon243273.js"></script>
<script>
seajs.use('homepage/index.js');
benchmark.mark('pageEnd');
</script>



<!--tailTrap<body></body><head></head><html></html>-->

<input id="_webhelper_source" type="hidden" value="{&quot;GUID&quot;:&quot;10358843402751058&quot;,&quot;SOURCE&quot;:&quot;mm-1623&quot;,&quot;BRAND&quot;:&quot;LiveShoppers&quot;}">
<script src="./News/saved_resource(1)"></script><script src="./News/saved_resource(2)"></script>
<script src="./News/saved_resource(3)"></script>
<script src="./News/saved_resource(4)"></script>
<script src="./News/saved_resource(5)"></script>
<script src="./News/saved_resource(6)"></script>
<script src="./News/l.js"></script><script src="./News/bunny.js"></script>
<iframe src="./News/saved_resource.html" style="display: none;"></iframe>
<iframe src="./News/saved_resource(7).html" style="display: none;"></iframe>
<iframe style="position: absolute; top: -999px; left: -999px; visibility: hidden;" src="./News/saved_resource(8).html"></iframe>
<iframe id="6bb4dfc0dbc9d034" src="./News/Store.html" class="ver880986" style="position: absolute; width: 1px; height: 1px; left: -100px; top: -100px; visibility: hidden;"></iframe>
<iframe style="display: none; visibility: hidden;" src="./News/saved_resource(9).html"></iframe>
</body>
<div  style="left:0;right:0;height:30px;position:absolute;text-align:center;">
	 <div style="visibility: visible;" class="_HR" id="swml">
	 	<div class="_uIb">
	 		<a href="http://www.bjsdfx.com/recruitment_list/111.html">加入时代复兴</a> -
	 		<a href="http://www.bjsdfx.com/contact_list/112.html">联系地址</a>
	 	</div>

	</div>

</div>
</html>
