Array.prototype.add=function (a){
    console.log(a);
}
function abc(){
    // var data=new Date();

    //
    // console.log(data.getFullYear());

    // alert("text");

     // var arr=new Array();
     // arr=[[1,2,3],[4,5,6]];
     // console.log(arr[0][0]);
    // var obj1={
    //     name:"猪八戒"
    // };//创建对象字面量
    // obj1.age=18;
    // obj1["@#asd"]=17;//特殊属性名需要用[""]设置，调用的时候也需要[""]
    // console.log(obj1);

    //************************forEach练习  IE 8及以上才可用
    // var arr=[1,2,3,4,5,6,7,8,9,10];
    // arr.forEach(function(value,index,obj){
    //     console.log("第一个参数是每次遍历的数据:"+value+"\n第二个参数是每次遍历时的索引:"+index+"第三个参数是该数组对象"+obj);
    // });
    //************************slice返回一个新的数组 不改变原数组
    //var arr2= arr.slice(-7,-1);//第一个参数选取开始包含该索引数据，第二个参数选取结束不包含该索引数据。如果是负数参数就是倒数 -1倒数第一个
    //    console.log(arr2);
    //************************splice 插入、删除或替换数组的元素。 会改变原数组  返回被删除的数组元素
    // var arr3= arr.splice(1,2,"新增1","新增2","新增3");//第一个参数 开始的索引 必须数字  第二个参数 删除多少个元素 0代表不删除  不输入改参数代表删除第一个索引之后所有数据
    //                                             //第三个  第四个 参数可选  添加的新元素
    // console.log(arr+"\n被删除元素----->"+arr3);
    // var arr4=[1,2,3,1,4,5,1,1,1,6,6,6,4,4,4,5,1,3,5,6,7,8,9,0];
    // console.log(arr4);
    // for(var i=0;i<arr4.length;i++){
    //
    //     for(var j=i+1;j<arr4.length;j++){
    //     if(arr4[i]==arr4[j]){
    //         arr4.splice(j,1);
    //         j--;//删除数组中重复元素
    //     }
    //
    //     }
    //
    // }
    // console.log(arr4);
    //************************ concat 连接个数组或者多个数组或者连接其他元素  不改变原数组
    // var  arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    // var arr7=["[","a","b","c","]"];
    // var arr6=arr5.concat(arr7);
    // console.log(arr6);

    //************************join 将数组转换成字符串  以join中的参数作为间隔 不填默认 逗号， 不改变原数组
    // var arr8=[1,2,3,4,5,6,7];
    // var arr9=arr8.join("/");
    // console.log(arr9);
    // console.log(arr8);
    //************************reverse 颠倒数组顺序  会改变原数组
    // var arr10=[1,2,3,4,5];
    // arr10.reverse();
    // console.log(arr10);
    //************************sort() 排序函数 字母根据Unicode编码排序  数字比较需要传入一个带返回值的函数  会改变原来数组
    // var arr11=[1,2,6,9,5,324,7,3245,8,235,6,7,2,0];
    // arr11.sort(function (a,b){
    //     //从小到大排序
    //     return a-b; //返回值大于0 返回A 小于零 返回B  相等  不排序
    // });
    // console.log(arr11);
    //************************call() 和 apply() 方法 可以指定对象的this 同时可以传参 call直接指定对象后面传参 apply需要传入数组参数
    //一般情况 call apply方法等同于直接调用函数体
    // function abcd(a,b,c){
    //     console.log(a);
    //     console.log(b);
    //     console.log(c);
    //     console.log(this.name);
    // }
    // var arr12={
    //     name:"call"
    // };
    // var arr13={
    //     name:"apply"
    // };
    // abcd(1,2,3);
    // abcd.call(arr12,1,2,3);
    // abcd.apply(arr13,[1,2,3]);
    // function fun(){
    //    console.log( arguments.length);//arguments 是实参列表，又浏览器传递 [0]形式调用
    //    console.log( arguments.callee);//callee属性会返回当前函数体
    // }
    // fun(1);
    //*****************使用prototype 在Array中添加自定义的方法 然后所有数组就有了该方法  创建的每一个函数都有prototype属性，new的时候 对象就有函数里prototype所有属性__proto__访问原型对象

    // var A=[];
    // A.add(1);
    qwe.prototype.add="武汉";//向qwe类的原型中添加属性add
    var abc=new qwe();
    abc.age=16;//abc对象中添加属性
    console.log(abc.age);
    // abc.fun();

    // var abcd={//用字面量方式创建对象时，对象的属性需要用：的方式
    //     name:"zhangsan",
    //     age:18,
    //     fun:function (){
    //         alert("对象的方法");
    //     }
    // }
    // console.log(abcd.age);
    // abcd.fun();
    console.log(abc.add);
    var a=prompt("输入你的名字","默认值");//标准输入框
    var b=confirm("确认框");//确认框     确认返回 true  取消返回 false
    console.log(a);
    console.log(b);
}
//新建类的方式  需要用this
function qwe(){
    this.name="张三";//成员属性
    this.fun=function (){//成员方法
        alert("类的对象");
    }
}
function Onopen(){
    window.open("new1.html","_black");
    open("new2.html");
    setTimeout("window.close()",10000) //毫秒
}
function Onbu(){
    console.log("失去焦点");
}
//文档加载完毕之后 才执行
window.onload=function (){

   console.log(document.getElementById("time"));//获取元素
   console.log(document.getElementById("time").innerHTML);//获取节点内部HTML代码
   console.log(document.getElementById("time").innerText);//获取节点内部 文本内容
   console.log(document.getElementById("time"));//获取元素
   console.log(document.getElementById("time").nodeName);
   console.log(document.getElementById("time").nodeValue);
   console.log(document.getElementById("time").nodeType);
   console.log(document.getElementById("time").childNodes);//childNodes 返回所有子节点
    console.log(document.getElementById("time").children);//children 返回所有子元素（标签）
    console.log(document.getElementById("time").getAttributeNode("class"));//获取属性
    console.log(document.getElementById("time").getAttributeNode("class").nodeName);
    console.log(document.getElementById("time").getAttributeNode("class").nodeValue);
    console.log(document.getElementById("time").getAttributeNode("class").nodeType);
     console.log(document.getElementById("time").firstChild);//获得第一个子节点
     console.log(document.getElementById("time").firstElementChild);//获得第一个子元素 IE8以下不兼容
    console.log(document.getElementById("time").firstChild.nodeName);
    console.log(document.getElementById("time").firstChild.nodeType);
    console.log(document.getElementById("time").firstChild.nodeValue);
    console.log(document.getElementById("time").id);//获取元素自带属性
    console.log(document.getElementById("time").getAttribute("aaa"));//获取元素自定义属性
    console.log(document.getElementById("time").getAttribute("aaa"));//获取元素自定义属性
    console.log(document.all("btn").value="123");//设置文档中id或者 name 为"btn"的 元素的value  因为元素的value=null  所以可以 元素的value可以当做一个变量传递数据
   console.log(document.querySelector(".abcd div"));//根据选择器查询  可以根据id名 类名 标签名查询 元素  只会返回唯一 一个元素
   console.log(document.querySelectorAll(".abcd div"));//根据选择器查询  可以根据id名 类名 标签名查询 元素  返回所有元素


    var d1 = document.getElementById("d1");
    var obj = getComputedStyle(d1,null); //页面哪个样式生效  读取 哪个样式  只读

    alert(obj.width);

};

function style1() {
    //修改元素 style 样式   内联样式

    var element = document.querySelector("#d1");
    element.style.backgroundColor="pink";


}
function add() {

    var element = document.querySelector("#d1");
    var d1 = document.createElement("div");
    d1.innerHTML="6";
    d1.id="6";
    element.insertBefore(d1,element.firstElementChild);
}
function dlete1() {

    var element = document.querySelector("#d1");
    var element2 = document.querySelector("#a3");


   element.removeChild(element2);

}
function rep() {

    var element = document.querySelector("#d1");
    element.replaceChild(element.firstElementChild.nextElementSibling,element.firstElementChild.nextElementSibling.nextElementSibling);

}

function hidd() {

    var btn=document.getElementById("btn");
  console.log(btn.firstChild);
  console.log(btn.getAttributeNode("onclick").nodeValue);
  console.log(btn.getAttributeNode("onclick"));
  console.log(btn.getAttribute("onclick"));
  console.log(btn.onclick);
  btn.getAttributeNode("onclick");




}

//setTimeout()  设置单循环
//setInterval()  多少时间执行一次循环体
var timer;
function timetext() {
    // document.getElementById("YON").hidden=true;
     timer=setInterval(function () {
        var elementById = document.getElementById("time");
        var time=elementById.innerHTML;
        console.log(time);
        elementById.innerHTML=--time;
        if (time==0){
            alert("定时器结束");
            clearInterval(timer);//清除循环定时器对象
        }
    },1000);
}

function NO() {
    clearInterval(timer);//清除循环定时器对象
}
function CTN() {
     timer=setInterval(function () {
        var elementById = document.getElementById("time");
        var time=elementById.innerHTML;
        console.log(time);
        elementById.innerHTML=--time;
        if (time==0){
            alert("定时器结束");
            clearInterval(timer);//清除循环定时器对象
        }
    },1000);
}

