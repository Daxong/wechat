package sdfx.model;

public class PartnerList {
	private int id;
	private int type;
	private String type_name;
	private String name;
	private String url;
	private int seq;
	private String logo;
	
	
	public PartnerList() {
		super();
		// TODO Auto-generated constructor stub
	}
	public PartnerList(int id, int type, String type_name, String name, String url, int seq, String logo) {
		super();
		this.id = id;
		this.type = type;
		this.type_name = type_name;
		this.name = name;
		this.url = url;
		this.seq = seq;
		this.logo = logo;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getType() {
		return type;
	}
	public void setType(int type) {
		this.type = type;
	}
	public String getType_name() {
		return type_name;
	}
	public void setType_name(String type_name) {
		this.type_name = type_name;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public int getSeq() {
		return seq;
	}
	public void setSeq(int seq) {
		this.seq = seq;
	}
	public String getLogo() {
		return logo;
	}
	public void setLogo(String logo) {
		this.logo = logo;
	}
	
	
}
