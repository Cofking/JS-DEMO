<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <SCRIPT src="text.js"></SCRIPT>
    <title>练习</title>
    <style>
        #d1{
            background-color: aqua;
        }
    </style>
</head>
<body>
<button onclick="abc()"> 点我</button>
<button onblur="Onbu()"> 点我</button>
<button onclick="Onopen()"> 新窗口</button>
<button onclick="timetext()"> 跳转</button>
<span  id="time" class="abc"  aaa="XXX">5</span>秒倒计时跳转
<span  id="time1" class="abcd"  aaa="XXX" hidden><div></div>5秒倒计时跳转</span>
<button onclick="NO()"> 暂停</button>
<button onclick="CTN()"> 继续</button>
<button id="btn" onclick="hidd()" >我是一个按钮</button>
<div id="d1" >
    <div id="a1">1</div>
    <div id="a2">2</div>
    <div id="a3">3</div>
    <div id="a4">4</div>
    <div id="a5">5</div>
</div>
<button id="btn2" onclick="add()" >新增</button>
<button id="btn3" onclick="dlete1()" >删除</button>
<button id="btn4" onclick="rep()" >替换</button>
<button id="btn5" onclick="style1()" >样式修改</button>
</body>
</html>
