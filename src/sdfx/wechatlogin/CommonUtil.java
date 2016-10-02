package sdfx.wechatlogin;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.math.RoundingMode;
import java.net.ConnectException;
import java.net.URL;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;

import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSocketFactory;
import javax.net.ssl.TrustManager;


import net.sf.json.JSONObject;
import sdfx.model.Newslist;

public class CommonUtil {
	/**
     * 发送https请求
     * 
     * @param requestUrl 请求地址
     * @param requestMethod 请求方式（GET、POST）
     * @param outputStr 提交的数据
     * @return JSONObject(通过JSONObject.get(key)的方式获取json对象的属性值)
     */
    public static JSONObject httpsRequest(String requestUrl, String requestMethod, String outputStr) {
        JSONObject jsonObject = null;
        try {
            // 创建SSLContext对象，并使用我们指定的信任管理器初始化
            TrustManager[] tm = { new MyX509TrustManager() };
            SSLContext sslContext = SSLContext.getInstance("SSL", "SunJSSE");
            sslContext.init(null, tm, new java.security.SecureRandom());
            // 从上述SSLContext对象中得到SSLSocketFactory对象
            SSLSocketFactory ssf = sslContext.getSocketFactory();

            URL url = new URL(requestUrl);
            HttpsURLConnection conn = (HttpsURLConnection) url.openConnection();
            conn.setSSLSocketFactory(ssf);
            
            conn.setDoOutput(true);
            conn.setDoInput(true);
            conn.setUseCaches(false);
            // 设置请求方式（GET/POST）
            conn.setRequestMethod(requestMethod);

            // 当outputStr不为null时向输出流写数据
            if (null != outputStr) {
                OutputStream outputStream = conn.getOutputStream();
                // 注意编码格式
                outputStream.write(outputStr.getBytes("UTF-8"));
                outputStream.close();
            }

            // 从输入流读取返回内容
            InputStream inputStream = conn.getInputStream();
            InputStreamReader inputStreamReader = new InputStreamReader(inputStream, "utf-8");
            BufferedReader bufferedReader = new BufferedReader(inputStreamReader);
            String str = null;
            StringBuffer buffer = new StringBuffer();
            while ((str = bufferedReader.readLine()) != null) {
                buffer.append(str);
            }

            // 释放资源
            bufferedReader.close();
            inputStreamReader.close();
            inputStream.close();
            inputStream = null;
            conn.disconnect();
            jsonObject = JSONObject.fromObject(buffer.toString());
        } catch (ConnectException ce) {
        	ce.printStackTrace();
            //log.error("连接超时：{}", ce);
        } catch (Exception e) {
        	e.printStackTrace();
            //log.error("https请求异常：{}", e);
        }
        return jsonObject;
    }
    
    public static void https(String requestUrl, String requestMethod, String outputStr) {
        try {
            
            TrustManager[] tm = { new MyX509TrustManager() };
            SSLContext sslContext = SSLContext.getInstance("SSL", "SunJSSE");
            sslContext.init(null, tm, new java.security.SecureRandom());
            // 从上述SSLContext对象中得到SSLSocketFactory对象
            SSLSocketFactory ssf = sslContext.getSocketFactory();

            URL url = new URL(requestUrl);
            HttpsURLConnection conn = (HttpsURLConnection) url.openConnection();
            conn.setSSLSocketFactory(ssf);
            
            conn.setDoOutput(true);
            conn.setDoInput(true);
            conn.setUseCaches(false);
            // 设置请求方式（GET/POST）
            conn.setRequestMethod(requestMethod);

            // 当outputStr不为null时向输出流写数据
            if (null != outputStr) {
                OutputStream outputStream = conn.getOutputStream();
               
                outputStream.write(outputStr.getBytes("UTF-8"));
                outputStream.close();
            }
            // 释放资源
            conn.disconnect();
        } catch (ConnectException ce) {
        	ce.printStackTrace();
            //log.error("连接超时：{}", ce);
        } catch (Exception e) {
        	e.printStackTrace();
            //log.error("https请求异常：{}", e);
        }
      
    }
    
    public static List<String> changeX(List<String> Xlist, int pointNum) {
		int listSize = Xlist.size();
		if(listSize > pointNum){
			int a = listSize / pointNum;
			List<String> newTlist = new ArrayList<String>();
			int j = listSize % pointNum - 1;
			for(int i=0;i<=pointNum;i++){
				newTlist.add(Xlist.get(j));
				j=j+a;		
			}
			return newTlist;
		}else{
			return Xlist;
		}
	}
    public static List<Double> changeY(List<Double> Ylist, int pointNum) {
		int listSize = Ylist.size();
		if(listSize > pointNum){
			int a = listSize / pointNum;
			List<Double> newTlist = new ArrayList<Double>();
			int j = listSize % pointNum - 1;
			DecimalFormat formater = new DecimalFormat();
	        formater.setMaximumFractionDigits(4);
	        formater.setGroupingSize(0);
	        formater.setRoundingMode(RoundingMode.FLOOR);
			for(int i=0;i<=pointNum;i++){
				String list=formater.format(Ylist.get(j));
				double dd=Double.parseDouble(list);
				newTlist.add(dd);
				j=j+a;		
			}
			return newTlist;
		}else{
			return Ylist;
		}
	}
}
