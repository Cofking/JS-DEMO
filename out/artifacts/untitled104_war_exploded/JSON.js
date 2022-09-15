/**
 * -JSON
 * -javaScript Object Notation JS对象表示法
 * -JSON 和JS 格式一样 但 JSON 属性名必须加双引号
 *
 *
 *      JSON分类：
 *      1.对象 {}
 *      2.数组[]
 *
 *      JSON允许的值：
 *      1.字符串
 *      2.数值
 *      3.布尔值
 *      4.null
 *      5.普通对象
 *      6.数组
 *
 *
 *
 */
window.onload=function () {

    var  obj ='{"name":"孙悟空","age":18}';
    var js={name:"猪八戒",age:29};
    /**
     * 将JSON字符串转换 JS对象
     *  JS中有  工具类 JSON
     * 这个对象可以将 JSON 转换 JS  也可以将 JS 转换JSON
     *
     * JSON.parse()+
     *   可以将JSON字符串转换 JS对象
     *   需要JSON字符串作为参数
     *
     *   JSON.stringify()
     *   需要js对象作为参数1
     */

    // //  JSON -> js
    // console.log(JSON.parse(obj).name);
    // console.log(JSON.parse(obj).age);
    //
    // //JS -> JSON
    // console.log(JSON.stringify(js));

    /**
     *
     * Ajax
     * 异步JS和XML
     *      局部获取数据
     *  onreadystatechange 事件  根据readyState状态处理
     */



}
function dian() {

    /**
     *
     * 如果 ajax请求为非同源  端口号 url 文档 有不相同  就是非同源
     * 这个时候如果想要请求 目标页面 需要目标页面服务端 响应段 设置 响应头为所有或者请求页面的url
     *     参考文件Login
     *     API文档 HTTP访问控制
     */




    var ajax=new XMLHttpRequest();//js内置ajax异步对象
    ajax.onreadystatechange=function () {

        if(ajax.readyState==4&&ajax.status==200) {
            var res = ajax.response;//response会根据获取的数据类型变更 responseTEXT会将获取的数据变成TEXT responseXML
            console.log(ajax.status);//状态码
            console.log(ajax.statusText);//状态字符串
            console.log(ajax.getAllResponseHeaders());//所有响应头
            console.log(ajax.response);//响应体

            if (res != null) {

            document.getElementById("name").value = JSON.parse(res).name;

            document.getElementById("sex").value = JSON.parse(res).sex;
        }
        }
    }
    var d1 = document.getElementById("age").value;
    //发送post请求必须设置请求头
    //ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
    ajax.open("get","Login?age="+d1,true);//如果为false 就是同步 需要等待状态码=4 继续执行下面代码
    ajax.send();//输入请求体 post 输入get地址?之后的 例如 ajax.send("age=",d1)
    // ajax.abort();//取消请求

}






