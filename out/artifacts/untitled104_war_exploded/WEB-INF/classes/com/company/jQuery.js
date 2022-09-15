/**
 *
 *  jQuery
 *   1．作为一般函数调用 $()  函数返回对象
 *      1).参教为函数:DoM加载完成后，执行此回调函数
 *      2)．参数为选择器字符串:查找所有匹配的标签，并将它们封装成jQuery对象
 *      3)．参数为DOM对象:将dom对象封装成jQuery对象
 *      4)．参数为html标签字符串（用得少):创建标签对象并封装成jQuery对象
 *  2．作为对象使用:$.xxx()
 *      1).$.each() 隐式遍历数据
 *      2).$.trim() 去除两端空格
 */
//jQuery 中 主要文档加载完毕之后执行
$(function (){//绑定文档加载完成的监听
   // $('#btn').on("click",function(){
    // 所有Js事件都可以实现   可以添加多个相同或不同的事件  不会覆盖  off()解除绑定事件 可以在动态中绑定
   //
   //  // });
   //  $('#btn').click(function () {//只有部分js事件可以绑定  可以添加多个相同或不同的事件  不会覆盖  off()解除绑定事件
   //      $('<input type="text" id="age2" name="age2">').appendTo('div');
   //      console.log(132);
   //  });
    //    one()  执行一次之后自动解除绑定
   //
   //  var abc=[1,2,3];
   //  $.each(abc,function (index,item) {
   //      console.log(index,item);
   //
   //  });
   //
   //  var $buttons=$('button');
   //
   //  console.log($buttons.length);
   //  console.log($buttons[0].innerText);
   //  // $buttons.each(function (index,i) {
   //  //     console.log(i.innerHTML,this);
   //  // })
   //  $buttons.each(function () {
   //          console.log(this.innerHTML);
   //      })
    /**
     * 基本选择器
     */
    // console.log($('#btn3').index());
    // $('#d1').css('background','red');
    // $('div,span').css('background','red');//选择所有 div span 标签
    // $('div.box ').css('background','red');

    /**
     * 层次选择器
     */
   // $('div li').css('background','red');//div下所有 li   所有祖父元素下的后代元素
    //$('li>span').css('background','red');//li下所有span    在给定父元素下匹配所有子元素
   // $('#d5+li').css('background','red');// 在id为d5之后的下一个li元素 匹配所有在 prev元素下的next元素
   //$('li .d5~*').css('background','red'); //匹配prev元素之后的所有 siblings元素

    /**
     * 过滤选择器
     */
    //$('div:first').css('background','red');//选择第一个div
    // $('div:last').css('background','red');//选择最后一个div
    //$('div:not(.d5)').css('background','red');//选择所有div没有class=d5的 没有class属性也可以
    $('div:lt(3):gt(0)').css('background','red');//多个过滤器 先后执行 不是同时执行


    /***
     * 表单选择器
     * 参考API
     * 
     */

    /**
     * jQuery 属性
     * $().attr(name,value) 设置属性 $().attr(name)  读属性
     * $().removeAttr(name)
     *
     * $(). prop(name,value) 设置属性 $().prop(name)  读属性
     *  $().removeProp(name)
     *
     * $().addClass(.class)  添加class属性
     *  $().removeClass(.class)
     *
     * var()/val(value)  读/写标签value
     * html()/html(htmlString) 读写标签文本
     *  attr()操作属性值为非布尔值的属性
     *  prop()专用操作属性值为布尔值的属性
     */

    /**
     * Ajax
     *
     *
     *
     */
    $.ajax({
        type: "POST", //请求方式
        url: "some.php",//请求地址
        data: "name=John&location=Boston",//请求参数
        success: function(msg){//响应体
            alert( "Data Saved: " + msg );
        }
    });



    /**
     *
     *
     * fadeOut() 淡出  fadeIn()淡入 fadeToggle() 自动切换
     *speed 淡出速度
     * easing 切换效果 默认swing 可用 linear
     * fn 动画完成是执行的函数 每个元素执行一次
     *       slideDown():带动画的展开
     *       sLideUp()：带动画的收缩
     *       sLideToggle():带动画的切换展开/收缩
     *
     * 显示隐藏 默认没有动画
     * show()   (不)带动画的显示
     * hide()    (不)带动画的隐藏
     * toggle()  (不)带动画的切换显示/隐藏
     *
     *animate({结束时的样式},time,function())
     */
    //fadeOut(speed,easing,fn) 淡出
    //fadeIn()(speed,easing,fn) 淡入






})
