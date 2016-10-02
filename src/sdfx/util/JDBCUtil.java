package sdfx.util;
	
	import java.sql.Connection;
	import java.sql.DriverManager;
	import java.sql.ResultSet;
	import java.sql.SQLException;
	import java.sql.Statement;
	/**
	 * JDBC工具类：主要功能包括【获取连接】，【释放jdbc资源】
	 *
	 */
public class JDBCUtil {
		//数据库连接配置
		private static String url1 = "jdbc:mysql://rdsshj1fvzlh92268305.mysql.rds.aliyuncs.com/sdfxcms?characterEncoding=utf8";
		private static String url2 = "jdbc:mysql://rdsshj1fvzlh92268305.mysql.rds.aliyuncs.com/sdfxwx?characterEncoding=utf8";
		private static String user = "reweb";
		private static String pass = "SdFxRea2016-ReWeb";
		
		static{
			//第一次运行的时候加载驱动
			try {
				new com.mysql.jdbc.Driver();
			} catch (SQLException e) {
				System.out.println("MySQL驱动加载异常！");
				e.printStackTrace();
			}
		}
		
		/**
		 * 工厂模式获取新连接
		 * @return
		 */
		public static Connection getConnection(){
			try {
				Connection conn = DriverManager.getConnection(url1, user, pass);
				return conn;
			} catch (SQLException e) {
				e.printStackTrace();
				System.out.println("jdbc链接失败");
			}
			return null;
		}
		public static Connection getUrl2Connection(){
			try {
				Connection conn = DriverManager.getConnection(url2, user, pass);
				return conn;
			} catch (SQLException e) {
				e.printStackTrace();
				System.out.println("jdbc2链接失败");
			}
			return null;
		}
		
		/**
		 * 关闭物理连接
		 * @param conn
		 */
		public static void close(Connection conn){
			close(conn, null, null);
		}
		/**
		 * 关闭物理连接
		 * @param conn
		 */
		public static void close(Connection conn,Statement st){
			close(conn, st, null);
		}
		/**
		 * 关闭物理连接
		 * @param conn
		 */
		public static void close(Connection conn,Statement st,ResultSet rs){
			try {
				if(rs!=null)rs.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
			try {
				if(st!=null)st.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
			try {
				if(conn!=null)conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}



