package sdfx.model;

import java.util.List;

public class FundChart {
	private List<String> tradedate;
	private List<Double> fqNav;
	private double totalpchg;
	private double maxNavRetraction;
	private double yearProfit;
	private double sharpRatio;
	private double stnratio;
	private int tradeDays;
	private String startDay;
	private String endDay;
	private double maxFaNav;
	
	
	
	public double getMaxFaNav() {
		return maxFaNav;
	}
	public void setMaxFaNav(double maxFaNav) {
		this.maxFaNav = maxFaNav;
	}
	public String getStartDay() {
		return startDay;
	}
	public void setStartDay(String startDay) {
		this.startDay = startDay;
	}
	public String getEndDay() {
		return endDay;
	}
	public void setEndDay(String endDay) {
		this.endDay = endDay;
	}
	public List<String> getTradedate() {
		return tradedate;
	}
	public void setTradedate(List<String> tradedate) {
		this.tradedate = tradedate;
	}
	
	public List<Double> getFqNav() {
		return fqNav;
	}
	public void setFqNav(List<Double> fqNav) {
		this.fqNav = fqNav;
	}
	public double getTotalpchg() {
		return totalpchg;
	}
	public void setTotalpchg(double totalpchg) {
		this.totalpchg = totalpchg;
	}
	public double getMaxNavRetraction() {
		return maxNavRetraction;
	}
	public void setMaxNavRetraction(double maxNavRetraction) {
		this.maxNavRetraction = maxNavRetraction;
	}
	public double getYearProfit() {
		return yearProfit;
	}
	public void setYearProfit(double yearProfit) {
		this.yearProfit = yearProfit;
	}
	public double getSharpRatio() {
		return sharpRatio;
	}
	public void setSharpRatio(double sharpRatio) {
		this.sharpRatio = sharpRatio;
	}
	public double getStnratio() {
		return stnratio;
	}
	public void setStnratio(double stnratio) {
		this.stnratio = stnratio;
	}
	public int getTradeDays() {
		return tradeDays;
	}
	public void setTradeDays(int tradeDays) {
		this.tradeDays = tradeDays;
	}
	
	
}
