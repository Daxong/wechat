package sdfx.wechatlogin;

import net.sf.json.JSONObject;

public class WeixinOauth2Token {
	// 网页授权接口调用凭证
    private String accessToken;
    // 凭证有效时长
    private int expiresIn;
    // 用于刷新凭证
    private String refreshToken;
    // 用户标识
    private String openId;
    // 用户授权作用域
    private String scope;
	public String getAccessToken() {
		return accessToken;
	}
	public void setAccessToken(String accessToken) {
		this.accessToken = accessToken;
	}
	public int getExpiresIn() {
		return expiresIn;
	}
	public void setExpiresIn(int expiresIn) {
		this.expiresIn = expiresIn;
	}
	public String getRefreshToken() {
		return refreshToken;
	}
	public void setRefreshToken(String refreshToken) {
		this.refreshToken = refreshToken;
	}
	public String getOpenId() {
		return openId;
	}
	public void setOpenId(String openId) {
		this.openId = openId;
	}
	public String getScope() {
		return scope;
	}
	public void setScope(String scope) {
		this.scope = scope;
	}
    
	 public static WeixinOauth2Token getOauth2AccessToken(String appId, String appSecret, String code) {
	        WeixinOauth2Token wat = null;
	        // 拼接请求地址
	        String requestUrl = "https://api.weixin.qq.com/sns/oauth2/access_token?appid=APPID&secret=SECRET&code=CODE&grant_type=authorization_code";
	        requestUrl = requestUrl.replace("APPID", appId);
	        requestUrl = requestUrl.replace("SECRET", appSecret);
	        requestUrl = requestUrl.replace("CODE", code);
	        // 获取网页授权凭证
	        JSONObject jsonObject = CommonUtil.httpsRequest(requestUrl, "GET", null);
	        if (null != jsonObject) {
	            try {
	                wat = new WeixinOauth2Token();
	                wat.setAccessToken(jsonObject.getString("access_token"));
	                wat.setExpiresIn(jsonObject.getInt("expires_in"));
	                wat.setRefreshToken(jsonObject.getString("refresh_token"));
	                wat.setOpenId(jsonObject.getString("openid"));
	                wat.setScope(jsonObject.getString("scope"));
	            } catch (Exception e) {
	                wat = null;
	                int errorCode = jsonObject.getInt("errcode");
	                String errorMsg = jsonObject.getString("errmsg");
	                //log.error("获取网页授权凭证失败 errcode:{} errmsg:{}", errorCode, errorMsg);
	            }
	        }
	        return wat;
	    }
}
