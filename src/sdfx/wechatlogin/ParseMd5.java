package sdfx.wechatlogin;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import org.apache.commons.lang.StringUtils;

public class ParseMd5 {
	
	/**
	 * 加密算法32位
	 * */
	public static String textToMD5L32(String plainText){
		String result = null;
		//首先判断是否为空
		if(StringUtils.isBlank(plainText)){
		return null;
		}
		try{
		//首先进行实例化和初始化
		MessageDigest md = MessageDigest.getInstance("MD5");
		//得到一个操作系统默认的字节编码格式的字节数组
		byte[] btInput = plainText.getBytes();
		//对得到的字节数组进行处理
		md.update(btInput);
		//进行哈希计算并返回结果
		byte[] btResult = md.digest();
		//进行哈希计算后得到的数据的长度
		StringBuffer sb = new StringBuffer();
		for(byte b : btResult){
		int bt = b&0xff;
		if(bt<16){
		sb.append(0);
		}
		sb.append(Integer.toHexString(bt));
		}
		result = sb.toString();
		}catch(NoSuchAlgorithmException e){
		e.printStackTrace();
		}
		return result;
		}
}
