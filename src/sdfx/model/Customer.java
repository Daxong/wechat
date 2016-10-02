package sdfx.model;

import java.util.List;
import java.util.Map;

public class Customer {
	private String name;
	private String card_no;
	//产品或许不止一支  map接收保险
	private Map<Integer,String> product;//delete you
	private int number;
	private String product_name;
	
	
	public String getProduct_name() {
		return product_name;
	}
	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}
	public int getNumber() {
		return number;
	}
	public void setNumber(int number) {
		this.number = number;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCard_no() {
		return card_no;
	}
	public void setCard_no(String card_no) {
		this.card_no = card_no;
	}
	public Map<Integer, String> getProduct() {
		return product;
	}
	public void setProduct(Map<Integer, String> product) {
		this.product = product;
	}
	
	
	
}
