package sdfx.model;

import java.sql.Timestamp;
import java.util.Date;

public  class Newslist {
	private int id;
	private int org_id;
	private int creator_id;
	private Timestamp publish_date;
	private String title;
	private String author;
	private String small_image;
	private String mobile_image;
	private String link;
	private String desc;
	private String content;
	
	private String fundManager;
	private String fdTrustee;
	private String fdinvestAdviser;
	private Date fdOpenDate;
	private String investStrategry;
	private String fdRiskType;
	private double realIssuanceSize;
	private String fdStatus;
	private int product_id;
	
	
	
	
	public int getProduct_id() {
		return product_id;
	}

	public void setProduct_id(int product_id) {
		this.product_id = product_id;
	}

	public String getFundManager() {
		return fundManager;
	}

	public void setFundManager(String fundManager) {
		this.fundManager = fundManager;
	}

	public String getFdTrustee() {
		return fdTrustee;
	}

	public void setFdTrustee(String fdTrustee) {
		this.fdTrustee = fdTrustee;
	}

	public String getFdinvestAdviser() {
		return fdinvestAdviser;
	}

	public void setFdinvestAdviser(String fdinvestAdviser) {
		this.fdinvestAdviser = fdinvestAdviser;
	}

	public Date getFdOpenDate() {
		return fdOpenDate;
	}

	public void setFdOpenDate(Date fdOpenDate) {
		this.fdOpenDate = fdOpenDate;
	}

	public String getInvestStrategry() {
		return investStrategry;
	}

	public void setInvestStrategry(String investStrategry) {
		this.investStrategry = investStrategry;
	}

	public String getFdRiskType() {
		return fdRiskType;
	}

	public void setFdRiskType(String fdRiskType) {
		this.fdRiskType = fdRiskType;
	}

	public double getRealIssuanceSize() {
		return realIssuanceSize;
	}

	public void setRealIssuanceSize(double realIssuanceSize) {
		this.realIssuanceSize = realIssuanceSize;
	}

	public String getFdStatus() {
		return fdStatus;
	}

	public void setFdStatus(String fdStatus) {
		this.fdStatus = fdStatus;
	}

	public Newslist() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Newslist(int id, int org_id, int creator_id, Timestamp publish_date, String title, String author,
			String small_image, String mobile_image, String link, String desc, String content) {
		super();
		this.id = id;
		this.org_id = org_id;
		this.creator_id = creator_id;
		this.publish_date = publish_date;
		this.title = title;
		this.author = author;
		this.small_image = small_image;
		this.mobile_image = mobile_image;
		this.link = link;
		this.desc = desc;
		this.content = content;
	}


	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getOrg_id() {
		return org_id;
	}
	public void setOrg_id(int org_id) {
		this.org_id = org_id;
	}
	public int getCreator_id() {
		return creator_id;
	}
	public void setCreator_id(int creator_id) {
		this.creator_id = creator_id;
	}
	public Timestamp getPublish_date() {
		return publish_date;
	}
	public void setPublish_date(Timestamp publish_date) {
		this.publish_date = publish_date;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getSmall_image() {
		return small_image;
	}
	public void setSmall_image(String small_image) {
		this.small_image = small_image;
	}
	public String getMobile_image() {
		return mobile_image;
	}
	public void setMobile_image(String mobile_image) {
		this.mobile_image = mobile_image;
	}
	public String getLink() {
		return link;
	}
	public void setLink(String link) {
		this.link = link;
	}
	
	
}
