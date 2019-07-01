//引入模块  并重命名
requirejs.config({
    paths: {
        "jquery": "jquery.min",
    }
})
requirejs(["jquery"], ($) => {
    
    var timer = null;
    var index = 0;
    var $olist = $(".banner li");
    var $tlist = $(".title li");

    timer = setInterval(autoPlay, 3000);
    //移到图片上，停止轮播
    $(".banner > li").mouseenter(function () {
        clearInterval(timer);
        index = $(this).index();
        $olist.eq(index).show().siblings().hide(10);;
    });
    $(".banner > li").mouseleave(function () {
        timer = setInterval(autoPlay, 3000);
    });
    //圆点的移入移出
    $tlist.mouseenter(function () {
        clearInterval(timer);
        $(this).addClass("current").siblings().removeClass("current");
        index = $(this).index();
        $olist.eq(index).show().siblings().hide(10);;
    });
    $tlist.mouseleave(function () {
        timer = setInterval(autoPlay, 3000);
    });
    //轮播函数
    function autoPlay() {
        index++;
        if (index == $olist.size()) {
            index = 0;
        }
        $tlist.eq(index).addClass("current").siblings().removeClass("current");
        $olist.eq(index).fadeIn(3000).siblings().fadeOut(10);
    }



    //ajax渲染nav列表
    //功能一 ： ajax请求数据  
    var deff = $.ajax({
        type: "get",
        url: "../json/nav-data.json?_id=" + new Date().getTime(),
        async: true
    });
    deff.done(function (json) {
        //选项卡的列表显示
        $(".h_nav").on("mouseenter", "li", function () {
            //var cname = $(this).attr("cname");//获取不同类型商品的编号classify001,2,3
            var cname = $(this).children("a").html();
            var str = "";
            for (const attr in json) {
                if (cname === json[attr].name) { //类名一样就进入循环
                    $("#nav_card").css("display", "block");
                    for (const i in json[attr].list) { //遍历某一编号下的商品
                        var pro = json[attr].list[i]; //遍历第三层的值
                        str += ` <li class="first">
                                <a id="card_phone " href="page.html?$cname = {attr}&pid=${pro.id}">
                                    <img src="../images/${pro.src}" alt="">
                                </a>
                            <div class="card_title">${pro.name}</div>
                            <p class="price card_p">${pro.price}元</p>
                            </li>`
                    }
                }
            }
            $(".p_card").html(str);
            //离开隐藏
            $(".h_nav").children("li").mouseleave(function () {
                $("#nav_card").css("display", "none");
            })
        })
    })

    //搜索框的ajax请求
    
     //搜索框
        $("#search").click(function () {
            $(".se_list").css({"display": "block"});
            $(this).css({"borderColor": "#ff6700"});
            return false
        });
        $(".search_list > li ").click(function () {
            var  cname = $(this).children("a").html();
            $(".se_list").css({"display": "block"});
            location.href =`phone-search.html?cname = ${cname}`;
            return false
        })
          $(document).click(function ( e ) { 
                $(".se_list").css("display","none");
                $(this).css({"borderColor":"#e0e0e0"});
                //return false
            });
    //轮播图上的选项卡
    $("#phe").css("display","none");
    $("#pho").mouseenter(function (){
        $("#phe").css("display","block");
    })
    $("#pho").mouseleave(function (){
        $("#phe").css("display","none");
    })

    //功能一 ： ajax请求数据 渲染手机列表 
    var deff = $.ajax({
        type: "get",
        url: "../json/sj-data.json?_id=" + new Date().getTime(),
        async: true
    });
    deff.done(function (json) {
        //全部显示
        //var title = "";
        //将内容显示到页面上
        var strCon = "";
        for (let attr in json) {
            var pro = json[attr]
                strCon += `<li>
                                <img src="../images/${pro.src}" alt="" >
                                <a href="page.html?id =${pro.id}">${pro.name}</a>
                                <p>骁龙855，索尼4800万超广角微距三摄</p>
                                <p><span>${pro.price}</span>元</p>
                            </li>`;
        }
       
        $("#sj-ul").html( strCon );
    });
     //ajax渲染家电列表
    //功能二 ： ajax请求数据  
    var deff = $.ajax({
        type: "get",
        url: "../json/jd-data.json?_id=" + new Date().getTime(),
        async: true
    });
    deff.done(function (json) {
        //全部显示
        //var title = "";
        var strCon = "";
        for (var attr in json) {
          //  title += `<span cname='${attr}'>${json[attr].name}</span>`;
            for( var i in json[attr].list ){
                var pro = json[attr].list[i];
                strCon += `<li>
                                <img src="../images/${pro.src}" alt="">
                                <a href="">${pro.name}</a>
                                <p>骁龙855，索尼4800万超广角微距三摄</p>
                                <p><span>${pro.price}</span>元</p>
                            </li>`;
            }
        }
            //将内容显示到页面上
        $("#jd-ul").html( strCon );
        //选项卡的列表显示
        $("#jd-title").on("mouseenter", "li", function () {
            //var cname = $(this).attr("cname");//获取不同类型商品的编号classify001,2,3
            var cname = $(this).children("a").html();
            var str = "";
            
            for (const attr in json) {
                if (cname === json[attr].name) { //类名一样就进入循环
                    for (const i in json[attr].list) { //遍历某一编号下的商品
                        var pro = json[attr].list[i]; //遍历第三层的值
                        str += ` <li>
                        <img src="../images/${pro.src}" alt="">
                        <a href="">${pro.name}</a>
                        <p>骁龙855，索尼4800万超广角微距三摄</p>
                        <p><span>${pro.price}</span>元</p>
                    </li>`
                    }
                }
            }
            $(".h_con_u_list").html(str);
        })
    })
     //ajax渲染家智能表
    //功能一 ： ajax请求数据  
    var deff = $.ajax({
        type: "get",
        url: "../json/zn-data.json?_id=" + new Date().getTime(),
        async: true
    });
    deff.done(function (json) {
        //全部显示
        //var title = "";
        var strCon = "";
        for (var attr in json) {
          //  title += `<span cname='${attr}'>${json[attr].name}</span>`;
            for( var i in json[attr].list ){
                var pro = json[attr].list[i]; 
                strCon += `<li>
                                <img src="../images/${pro.src}" alt="">
                                <a href="">${pro.name}</a>
                                <p>骁龙855，索尼4800万超广角微距三摄</p>
                                <p><span>${pro.price}</span>元</p>
                            </li>`;
            }
        }
        
        //将title内容显示到页面上
        //$(".nav").html( title );
    
        //将内容显示到页面上
        $("#zn-ul").html( strCon );
        //选项卡的列表显示
        $("#zn-title").on("mouseenter", "li", function () {
            //var cname = $(this).attr("cname");//获取不同类型商品的编号classify001,2,3
            var cname = $(this).children("a").html();
            var str = "";
            for (const attr in json) {
                if (cname === json[attr].name) { //类名一样就进入循环
                    for (const i in json[attr].list) { //遍历某一编号下的商品
                        var pro = json[attr].list[i]; //遍历第三层的值
                        str += ` <li>
                        <img src="../images/${pro.src}" alt="">
                        <a href="">${pro.name}</a>
                        <p>骁龙855，索尼4800万超广角微距三摄</p>
                        <p><span>${pro.price}</span>元</p>
                    </li>`
                    }
                }
            }
            $("#zn-ul").html(str);
        })
    })
   
});