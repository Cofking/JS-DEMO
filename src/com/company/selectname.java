package com.company;

import com.Schema.one;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class selectname {

    public one queryname(Integer i){
        String url="jdbc:mysql://localhost:3306/MySql";
        String username="root";
        String password="123456";
        Connection conn=null;
        PreparedStatement pst=null;
        ResultSet rs=null;
        one One=null;

        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn=DriverManager.getConnection(url,username,password);

            String sql="select * from one.one where age=?";
        pst=conn.prepareStatement(sql);
        pst.setInt(1,i);
        rs=pst.executeQuery();
        if(rs.next()){
            One=new one();
            One.setName(rs.getString("name"));
            One.setAge(rs.getInt("age"));
            One.setSex(rs.getString("sex"));

        }
        }catch (Exception e){
                e.printStackTrace();
        }finally {
            try {
                if (rs != null) {
                    rs.close();
                }
                if (conn != null) {
                    conn.close();
                }
                if (pst != null) {
                    pst.close();
                }
            }catch (Exception e){
                e.printStackTrace();
            }
        }

        return One;
    }
}
