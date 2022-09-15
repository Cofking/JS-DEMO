window.onload=function (){
    // var elementsByTagName = document.getElementsByTagName("span");
    // var day2 = new Date();
    // day2.setTime(day2.getTime());
    // var s2 = day2.getFullYear()+"-" + (day2.getMonth()+1) + "-" + day2.getDate();
    // var date1="2028-10-27";
    // var  startDate = Date.parse(s2);
    // var  endDate = Date.parse(date1);
    // elementsByTagName[0].innerText=(endDate - startDate)/(1*24*60*60*1000);

     // var elementById = document.getElementById("d2");
    // console.log(elementById.clientWidth);//返回当前可见的宽度  是个数字可以计算 内容区+内边距 只读 如果要修改 使用style 内边距 修改
    // console.log(elementById.clientHeight);//返回当前可见的高度  是个数字可以计算 内容区+内边距 只读
    // console.log(elementById.offsetWidth);//返回元素的宽度    包括 内容区+内边距+边框
    // console.log(elementById.offsetHeight);//返回元素的高度    包括 内容区+内边距+边框

    // console.log("滚动条垂直完整内容区+内边距高度"+elementById.scrollHeight);//滚动条垂直完整内容区+内边距高度
    // console.log("滚动条垂直滚动距离"+elementById.scrollTop);//滚动条垂直滚动距离
    // console.log("滚动条水平完整内容区+内边距宽度"+elementById.scrollWidth);//滚动条水平完整内容区+内边距宽度
    // console.log("滚动条水平滚动距离"+elementById.scrollLeft);//滚动条水平滚动距离
    // var div1 = document.getElementById("d1");
    // //当事件响应函数被触发时，浏览器每次都会将一个事件对象作为实参传进 响应函数
    // //在事件对象中封装了一切事件相关信息  比如  鼠标坐标 按键 滚轮
    // div1.onmousemove=function (event){
    //     event.clientX;//获取鼠标指针  当前窗口  水平坐标
    //     event.clientY;//获取鼠标指针  当前窗口  垂直坐标
    // }

    // var elementById = document.getElementById("d3");
    // var d6 = document.getElementById("d6");
    // d6.onmousemove=function (event){
    //     event.cancelBubble=true;
    // }
    // document.onmousemove=function (event){
    //     //var x = event.pageX;//获取鼠标指针  整个页面  水平坐标
    //     //var y = event.pageY;//获取鼠标指针  整个页面  垂直坐标
    //     var x = event.clientX+document.body.scrollLeft;//当前窗口水平偏移量+滚动条水平滚动距离
    //     var y = event.clientY+document.body.scrollTop;//当前窗口水平偏移量+滚动条垂直滚动距离
    //     elementById.style.left=x+"px";
    //     elementById.style.top=y+"px";
    //
    // }


    //事件冒泡  事件会触发自己响应事件后  触发父元素相同事件 触发祖先元素的相同事件
    //后代元素上事件被触发 时 祖先元素的相同事件也会被触发  冒泡大部分来说是有用的  如果不希望事件冒泡 可以通过事件取消冒泡
    // var d4 = document.getElementById("d4");
    // d4.onclick=function (event){
    //     alert("我是DIV");
    //
    // }
    // var d5 = document.getElementById("d5");
    // d5.onclick=function (event){
    //     alert("我是SPAN");
    //     event.cancelBubble=true;
    //
    // }
    // document.body.onclick=function (event ){
    //     alert("我是BODY");
    //
    //
    // }

    //事件的委派   将事件绑  定给元素的共同祖先元素 当后代触发事件时  会冒泡到祖先元素 通过祖先元素来触发响应函数处理事件
    //事件的绑定   使用对象.事件名=funciton(){} 的方式只能绑定 一个 ，事件名相同的时候 第二个绑定的会覆盖第一个
    /**
     * addEventListener
     * 参数
     * 1.事件的字符串 不要on
     * 2.回调函数，当事件被触发调用的函数
     * 3.是否在捕获阶段触发事件，布尔值 一般传false
     * 触发事件顺序为先绑定先触发 后绑定后触发
     * @type {HTMLElement}
     */
    //捕获：  事件先从最外层元素到目标元素去捕获事件  到了目标元素之后向上冒泡触发事件

    // var elementById = document.getElementById("d3");
    // elementById.addEventListener("click",function () {
    //
    // },false);
    /**
     * 拖拽
     * @type {HTMLElement}
     */
    // var d7 = document.getElementById("d7");
    // d7.onmousedown=function (event){
    //     var left=event.pageX;
    //     var top=event.pageY;
    //     var a =left-d7.offsetLeft;
    //     var b =top-d7.offsetTop;
    //     document.onmousemove=function (event){
    //         var x = event.pageX;//获取鼠标指针  整个页面  水平坐标
    //         var y = event.pageY;//获取鼠标指针  整个页面  垂直坐标
    //         //     var x = event.clientX+document.body.scrollLeft;//当前窗口水平偏移量+滚动条水平滚动距离
    //         //     var y = event.clientY+document.body.scrollTop;//当前窗口水平偏移量+滚动条垂直滚动距离
    //         d7.style.left=x-a+"px";
    //         d7.style.top=y-b+"px";
    //
    //     }
    //     document.onmouseup=function ()   {
    //         document.onmousemove=null;
    //         document.onmouseup=null;
    //     }
    //
    //     return false;
    //
    //
    // }


    /**
     * 滚轮事件
     * onwheel   是否滚动
     *deltaX 水平滚动  正值右边 负值左边    1（→）  -1（←）
     *deltaY 垂直滚动   下滚动 正值，向上滚动 负值   1（↓） -1 （↑）
     *
     * 使用addEventListener() 方法绑定响应函数 取消默认行为需要用 event.preventDefault(); IE8不支持
     */

    var d7 = document.getElementById("d7");
    d7.onwheel=function (event){
        if(event.deltaY>0){
            d7.style.height=d7.clientHeight+10+"px";

        }else if (event.deltaY<0) {
            d7.style.height=d7.clientHeight-10+"px";
        }
        event.preventDefault();//取消浏览器默认
        // return false;//取消浏览器默认

    }



}

function move() {
    var elementById = document.getElementById("d2");
    var elementById2 = document.getElementsByTagName("input");
    if((elementById.scrollHeight-elementById.scrollTop)==elementById.clientHeight) {
        elementById2[0].disabled=false;
        elementById2[1].disabled=false;
    }else{
        elementById2[0].disabled=true;
        elementById2[1].disabled=true;
    }

}



function print() {
    var elementById = document.getElementById("d2");
    console.log("滚动条垂直完整内容区+内边距高度:  "+elementById.scrollHeight);//滚动条垂直完整内容区+内边距高度
    console.log("滚动条垂直滚动距离:  "+elementById.scrollTop);//滚动条垂直滚动距离
    console.log("滚动条水平完整内容区+内边距宽度:  "+elementById.scrollWidth);//滚动条水平完整内容区+内边距宽度
    console.log("滚动条水平滚动距离:  "+elementById.scrollLeft);//滚动条水平滚动距离
    console.log(elementById.clientHeight);
    console.log((elementById.scrollHeight-elementById.scrollTop)==elementById.clientHeight)//滚动条高度减去滚动距离等于可见高度 意味着 滚动条滑动到底

}
