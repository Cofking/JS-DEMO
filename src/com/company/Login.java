package com.company;

import com.Schema.one;
import com.fasterxml.jackson.databind.ObjectMapper;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;




@WebServlet("/Login")
public class Login extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String json="";
        String age =req.getParameter("age");
        if(age!=null&& !age.trim().equals("")){
            selectname dao =new selectname();
            one O=dao.queryname(Integer.valueOf(age));
            if(O!=null){
                ObjectMapper om=new ObjectMapper();
                json=om.writeValueAsString(O);
            }
        }
        resp.setContentType("application/json;charset=utf-8");
        resp.setHeader("Access-Control-Allow-Origin","*");//设置响应头 允许跨域响应
        resp.setHeader("Access-Control-Allow-Origin","http://127.0.0.1");//设置响应头 允许该端口的网页发请求
        PrintWriter out= resp.getWriter();
        out.println(json);
        out.flush();

        out.close();
    }
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
