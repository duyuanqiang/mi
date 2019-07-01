//ajax渲染nav列表
     //功能一 ： ajax请求数据  
     var deff = $.ajax({
        type: "get",
        url: "../json/nav-data.json?_id=" + new Date().getTime(),
        async: true
    });
    deff.done(function (json) {
        //选项卡的列表显示
       
        $(".h_nav").on("mouseenter","li",function (){
            var cname = $(this).children("a").html();
            var str = "";
            for (const attr in json) {
                if( cname === json[attr].name){//类名一样就进入循环
                    $("#nav_card").css("display","block");
                    for (const i in json[attr].list){//遍历某一编号下的商品
                        var pro = json[attr].list[i];//遍历第三层的值
                        str +=   ` <li class="first">
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
            $(".h_nav").children("li").mouseleave(function (){
                $("#nav_card").css("display","none");
            })
        })
    })


    $(".logo").click(function() {
        location.href ="index.html"
    })
    //取值渲染
    var str = location.href;//http://127.0.0.1/mi/html/page.html?$id=shop06
    console.log(str)
    var index = str.split("=")[1];
    /* var pid = $(".pid").attr("pid")
    console.log(pid) */

    var deff = $.ajax({
        type: "get",
        url: "../json/sj-data.json?_id=" + new Date().getTime(),
        async: true
    });
    deff.done(function (json) {
        //渲染详情页
        var str = "";
        for (const attr in json) {
            var pro = json[attr]
            if(index == pro.id){
                str += ` 
                    <div class="goods-detail-wrap">
                        <div class="goods-detail-info clearfix">
                            <div class="container">
                                <div class="row">
                                    <div class=" goods-detail-left-info">
                                        <div class="goods-pic-box  " id="J_mi_goodsPicBox">
                                            <div class="goods-big-pic ">
                                                <img src="../images/${pro.src}" class="J_goodsBigPic"
                                                    id="J_BigPic">
                                            </div>
            
                                            <div class="goods-small-pic clearfix">
                                                <ul id="goodsPicList">
                                                    <li class="current"><img src="../images/${pro.src}"></li>
                                                </ul>
                                            </div>
            
                                        </div>
                                    </div>
                                    <div class="goods-info-rightbox">
                                        <div class="goods-info-leftborder"></div>
                                        <dl class="goods-info-box ">
                                            <dt class="goods-info-head">
                                                <dl id="J_goodsInfoBlock">
                                                    <dt id="goodsName" class="goods-name">${pro.name}</dt>
                                                    <dd class="goods-subtitle">
                                                        <p> 个性时尚 / 细节出众 / 纤薄轻巧 / 多彩时尚 </p>
                                                    </dd>
                                                    <dd class="goods-phone-type">
                                                        <p> 适用于 ${pro.name}</p>
                                                    </dd>
                                                    <dd class="goods-info-aftersale-company" id="J_aftersaleCompany" type="1"
                                                        desc="null">小米自营</dd>
                                                    <dd class="goods-info-head-tip">
                                                        <ul>
                                                            <li class="gift"> <i>赠品</i>赠米粉卡，最高含100元话费 </li>
                                                        </ul>
                                                    </dd>
                                                    <dd class="goods-info-address J_addressWrap address-wrap clearfix">
                                                        <div class="user-default-address clearfix" id="J_userDefaultAddress">
                                                            <div class="address-info" style="margin-left: 48px;">
                                                                <span class="item">北京</span><span class="item">北京市</span>
                                                                <span class="item">东城区</span><span class="item">安定门街道</span>
                                                            </div>
                                                                <i class="iconfont switch-choose-regions" id="J_switchChooseRegions"></i>
                                                        </div>
                                                    </dd>
                                                    <dd class="goods-info-head-price clearfix"> 
                                                        <b class="J_mi_goodsPrice">${pro.price}</b>
                                                        <i>&nbsp;元 </i> 
                                                        <del> 
                                                            <span class="J_mi_marketPrice"></span> 
                                                        </del> 
                                                    </dd>
                                                    <dd class="goods-info-head-colors clearfix"> <span
                                                            class="style-name">颜色：紫色</span>
                                                        <div class="clearfix">
                                                            <div class="colorli"> 
                                                            <a href="//item.mi.com/1190800018.html" class="current" title="紫色" ">
                                                                <img class="square" src="../images/${pro.src}" style =" width:38px; height:38px">
                                                            </a> 
                                                        </div>
                                                            
                                                        </div>
                                                    </dd>
                                                    <dd class="goods-info-head-cart" id="goodsDetailBtnBox">
                                                        <div class="buy-wrap"> 
                                                            <a href="" id="goodsDetailAddCartBtn"class="btn  btn-primary goods-add-cart-btn"
                                                             pid='${pro.id}' pname='${pro.name}' price='${pro.price}' src='${pro.src}'> 加入购物车 </a> 
                                                        </div>
                                                        <a id="goodsDetailCollectBtn" class=" btn btn-gray  goods-collect-btn ">
                                                            <i class="iconfont default"></i>
                                                            <i class="iconfont red"></i>
                                                            <i class="iconfont red J_redCopy"></i>喜欢 
                                                        </a>
                                                    </dd>
                                                    <dd class="goods-info-head-policy" id="J_policy">
                                                        <a href="javascript:void(0);"title=""> 
                                                            <i class="iconfont"></i> 小米自营</a>
                                                            <a href="javascript:void(0);" title="由小米发货"> 
                                                                <i class="iconfont"></i>
                                                                小米发货
                                                            </a>
                                                            <a href="javascript:void(0);" title=""> 
                                                                <i class="iconfont"></i> 7天无理由退货</a>
                                                            <a href="javascript:void(0);"title="由小米发货的商品，单笔满150元免运费;特殊商品需要单独收取运费，具体以实际结算金额为准；优惠券等不能抵扣运费金额;"> 
                                                            <i class="iconfont"></i> 运费说明</a>
                                                    </dd>
                                                    <dd class="goods-info-head-userfaq  clearfix">
                                                        <ul >
                                                            <li class="J_commentIcon" data-href="#goodsComment" data-index="2">
                                                                <i class="iconfont"></i> 评价<b>885</b> 
                                                            </li>
                                                            <li class="J_questionIcon mid" data-href="#goodsFaq" data-index="3"> 
                                                                <i class="iconfont"></i> 提问<b>6</b> 
                                                            </li>
                                                            <li class="J_commentIcon" id="J_commentSatisfyRate" data-index="2"> 
                                                                <i class="iconfont"></i>满意度<b>95.0%</b>
                                                            </li>
                                                        </ul>
                                                    </dd>
                                                </dl>
                                            </dt>
                                            <dd class="goods-info-foot">
                                                <a href="//list.mi.com/8" >
                                                    <span class="iconfont"></span>
                                                    查看更多保护套/保护壳
                                                </a>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            }
        }
        $(".goods-detail").html(str);
    })

    //功能三：添加到购物车
 		//将多个商品存入到一个数组中，在添加到localStorage中
 		$(".goods-detail").on("click","#goodsDetailAddCartBtn",function(){
            //定义一个数组 存放多个商品
            var arr = [];
            var proJson = {};//存放一个商品的所有数据
            var flag = true;//假设值为true 可以向数组中添加数据
            //获取当前按钮对应的商品数据
            var pname = $(this).attr("pname");
            var price = $(this).attr("price");
            var src = $(this).attr("src");
            var pid = $(this).attr("pid");
            proJson = {
                "id" : pid,
                "name":pname,
                "price":price,
                "src":src,
                "count":1
            }
            //先取出storage中的数据
            var str = localStorage.getItem("shoplist");
            if( str != null ){//说明storage中有数据
                arr = JSON.parse( str ) ;//先取出数据存入到数组中

                //判断当前点击的商品是否在购物车中存在 如果存在就让count值自增1
                arr.forEach((pro)=>{
                    //pro表示数组中的数据(商品对象)
                    if( pro.id === proJson.id ){
                        pro.count++;
                        flag = false;
                        return;
                    }
                })
            }
            
            //假设成立
            if( flag ){
                arr.push( proJson );
            }
            
            //将数组存入到storage
            localStorage.setItem( "shoplist" , JSON.stringify( arr ) );
            
            alert("添加成功")
        })
        $(".shop_car").click(function(){
            location.href = "../html/shopcar.html";
        })