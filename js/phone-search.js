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
            //var cname = $(this).attr("cname");//获取不同类型商品的编号classify001,2,3
            var cname = $(this).children("a").html();
            var str = "";
            for (const attr in json) {
                if( cname === json[attr].name){//类名一样就进入循环
                    $("#nav_card").css("display","block");
                    for (const i in json[attr].list){//遍历某一编号下的商品
                        var pro = json[attr].list[i];//遍历第三层的值
                        str +=   ` <li class="first">
                                        <a id="card_phone " href="page.html?$id=${pro.id}">
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
   
    //渲染列表页
    var str = location.href;
    
    //http://127.0.0.1/mi/html/phone-search.html?cname%20=%20%E5%B0%8F%E7%B1%B3%209
    var arr = str.split("?")[1];//cname%20=%20%E5%B0%8F%E7%B1%B3%209
    var cname = decodeURI(arr.split("=")[1]);

    //渲染列表
    $.ajax({
        type:"get",
        url:"../json/lb-data.json?_id="+new Date().getTime(),
        async:true,
        success : function(json){
            $("#tip").html(cname);
            $("#search").val(cname);
            $("#search").click(function () {
                $("#search").val(cname);
                $(".se_list").css({"display": "block"});
                $(this).css({"borderColor": "#ff6700"});
                return false
            });
            $(".search_list > li ").click(function () {
                var  cname = $(this).children("a").html();
                $(".se_list").css({"display": "block"});
                //cname = cname.replace( /\s+/g,"" );
                location.href =`phone-search.html?cname = ${cname}`;
                return false
            })
              $(document).click(function ( e ) { 
                    $(".se_list").css("display","none");
                    $(this).css({"borderColor":"#e0e0e0"});
                    return false
                }); 
            for( const attr in json ){  //classify
                cname = cname.replace( /\s+/g,"" );
                pname = json[attr].name.replace( /\s+/g,"" );

                if( cname == "小米9"){ //xiaomi  redmi
                    var str = "";
                    for (const i in json[attr].list1.list ){
                        var pro = json[attr].list1.list[i];
                        str += `<div class="goods-item">
                                    <div class="figure figure-img">
                                        <a href="page.html?id =${pro.id}"><img src="../images/${pro.src1}" alt=""></a>
                                    </div>
                                    <h2 class="title">
                                        <a target="_blank" href="">${pro.name}</a>
                                    </h2>
                                    <p class="price">${pro.price}元 </p>
                                    <div class="thumbs">
                                        <ul class="thumb-list">
                                            <li width="34" height="34" alt="">
                                                <a href=""><img src="../images/${pro.src1}" alt=""></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="btn-card">
                                        <a href="" id="btn-card">加入购物车</a>
                                    </div>
                                </div>`;
                            
                    } 
                    json[attr].list2.list.forEach(pro => {
                        str += `<div class="goods-item">
                                    <div class="figure figure-img">
                                        <a href=""><img src="../images/${pro.src1}" alt=""></a>
                                    </div>
                                    <h2 class="title">
                                        <a target="_blank" href="">${pro.name}</a>
                                    </h2>
                                    <p class="price">${pro.price}元 </p>
                                    <div class="thumbs">
                                        <ul class="thumb-list">
                                            <li width="34" height="34" alt="">
                                                <a href=""><img src="../images/${pro.src1}" alt=""></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="btn-card">
                                        <a href="" id="btn-card">加入购物车</a>
                                    </div>
                                </div>`;
                            
                    } )
                    for (const i in json[attr].list3.list ){
                        var pro = json[attr].list3.list[i];
                        str += `<div class="goods-item">
                                    <div class="figure figure-img">
                                        <a href=""><img src="../images/${pro.src1}" alt=""></a>
                                    </div>
                                    <h2 class="title">
                                        <a target="_blank" href="">${pro.name}</a>
                                    </h2>
                                    <p class="price">${pro.price}元 </p>
                                    <div class="thumbs">
                                        <ul class="thumb-list">
                                            <li width="34" height="34" alt="">
                                                <a href=""><img src="../images/${pro.src1}" alt=""></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="btn-card">
                                        <a href="" id="btn-card">加入购物车</a>
                                    </div>
                                </div>`;
                            
                    } 
                    for (const i in json[attr].list4.list ){
                        var pro = json[attr].list4.list[i];
                        str += `<div class="goods-item">
                                    <div class="figure figure-img">
                                        <a href=""><img src="../images/${pro.src1}" alt=""></a>
                                    </div>
                                    <h2 class="title">
                                        <a target="_blank" href="">${pro.name}</a>
                                    </h2>
                                    <p class="price">${pro.price}元 </p>
                                    <div class="thumbs">
                                        <ul class="thumb-list">
                                            <li width="34" height="34" alt="">
                                                <a href=""><img src="../images/${pro.src1}" alt=""></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="btn-card">
                                        <a href="" id="btn-card">加入购物车</a>
                                    </div>
                                </div>`;
                            
                    } 
                    $("#J_goodsList").html( str );//显示对应的商品
                    
                    
                    
                }else if(cname == "RedmiK20pro"){
                    var str = "";
                    for (const i in json[attr].list1.list ){
                        var pro = json[attr].list1.list[i];
                        str += `<div class="goods-item">
                                    <div class="figure figure-img">
                                        <a href=""><img src="../images/${pro.src1}" alt=""></a>
                                    </div>
                                    <h2 class="title">
                                        <a target="_blank" href="">${pro.name}</a>
                                    </h2>
                                    <p class="price">${pro.price}元 </p>
                                    <div class="thumbs">
                                        <ul class="thumb-list">
                                            <li width="34" height="34" alt="">
                                                <a href=""><img src="../images/${pro.src1}" alt=""></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="btn-card">
                                        <a href="" id="btn-card">加入购物车</a>
                                    </div>
                                </div>`;
                            
                    } 
                    $("#J_goodsList").html( str );//显示对应的商品
                }
            }
        }           
    })
            