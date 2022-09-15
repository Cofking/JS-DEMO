window.onload=function (){
    /**
     * 键盘事件：
     * 一般绑定给可以获取焦点的对象或者document
     * 用事件对象 event获取  按下的按键
     * altkey ctrlkey shiftkey 判断是否被按下
     *
     */
    // var d1 = document.getElementsByTagName("input")[0];

    // d1.onkeydown=function (event) {
    //     if(event.key>="0"&&event.key<=9){
    //       return false;
    //     }
    //
    //     if(event.key>="a"&&event.key<="z"){
    //
    //         return false;
    //     }
    //
    // }
    // d1.onkeyup=function () {
    //
    // }
    var div1 = document.getElementById("d1");
    var dir;
    document.onkeydown=function (event) {
       dir= event.key

    }
    document.onkeyup=function () {
        dir=0;
    }

   var timer=setInterval(function () {


           if(dir==="ArrowUp"){
               div1.style.top=div1.offsetTop-10+"px";
           }
           if(dir==="ArrowDown"){
               div1.style.top=div1.offsetTop+10+"px";
           }
           if(dir==="ArrowLeft"){
               div1.style.left=div1.offsetLeft-10+"px";
           }
           if(dir==="ArrowRight"){
               div1.style.left=div1.offsetLeft+10+"px";
           }

   },1);

    /**
     * BOM
     *浏览器对象模型
     * BOM可以使我们通过JS来操作浏览器
     *在BOM中为我们提供了一组对象，用来完成对浏览器的操作- BOM对象
     *window
     *代表的是整个浏览器的窗口，同时window也是网页中的全局对象Navigator
     *Navigator     只剩下  --userAgent--  属性 有用。
     *代表的当前浏览器的信息.,通过该对象可以来识别不同的浏览器Location
     *Location
     *代表当前浏览器的地址栏信息，通过Location可以获取地址栏信息，或者操作浏览器跳转页面History
     *History
     *代表浏览器的历史记录，可以通过该对象来操作浏览器的历史记录
     *由于隐私原因，该对象不能获取到具体的历史记录，只能操作浏览器向前或向后翻页而且该操作只在当次访间时有效
     *screen
     *代表用户的屏幕的信息，通过该对象可以获取到用户的显示器的相关的信息
     *
     * 这些BOM对象 都在  window 对象的属性中保存
     *  可通过window对象使用 ，也可以直接使用
     */
   // console.log(navigator.userAgent.search(/chrome/i));
   //  console.log(/fasd/i.test("asdasdfasd"));
   //  console.log("ActiveXObject" in window);//IE浏览器独有的属性
   //  console.log(history);
   //
    var li = document.getElementsByTagName("button")[0];
    li.onclick=function () {
   //      // history.back();
   //   // history.forward();
   //      history.go(0);//跳转指定页面  整数      2向前跳转2个页面  -2 向后跳转2个页面
   //      location="index2.jsp";
    location.reload();//重新加载当前页面   等同刷新
    }

    /** location
     *  修改location属性为完整路径 或者相对路径 会自动跳转 并且 生成历史记录
     *  assign() 和直接修改location属性值一样
     *  replace() 用新页面替换当前页面 调用完毕也会跳转  不会生成历史记录
     */














}