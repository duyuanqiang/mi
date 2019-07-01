window.onload = function(){
    $()
    //判断是否有数据
    var str = localStorage.getItem("shoplist");
    if( str != null ){
        var strCon = "";
        var count = 0;
        var arr = JSON.parse(str);
        arr.forEach( (proinfo)=>{
            
             count += proinfo.count;
            
            strCon += `
            <div class="item-box">
                            <div class="item-table J_cartGoods">
                                <div class="item-row clearfix">
                                    <div class="col col-check">
                                        <input type="checkbox"  class="iconfont icon-checkbox icon-checkbox-selected J_itemCheckbox">
                                    </div>
                                    <div class="col col-img">
                                        <a href="//item.mi.com/1190800018.html" target="_blank"> 
                                        <img alt=""src="../images/${proinfo.src}" width="80" height="80">
                                        </a>
                                    </div>
                                    <div class="col col-name">
                                        <div class="tags"> </div>
                                        <div class="tags"> </div>
                                        <h3 class="name">
                                            <a href="//item.mi.com/1190800018.html" target="_blank"> ${proinfo.name}
                                            </a>
                                        </h3>
                                    </div>
                                    <div class="col col-price"> ${proinfo.price}
                                        <p class="pre-info"> </p>
                                    </div>
                                    <div class="col col-num">
                                        <div class="change-goods-num clearfix J_changeGoodsNum" data-id="${proinfo.id}" data-num="${proinfo.count}"
                                        data-buylimit="5">
                                            <a href="javascript:void(0)" class="J_minus updateCount "data-number="-1">
                                                <i class="iconfont">-</i>
                                            </a>
                                            <input tyep="text" name="2190800002_0_buy" value="${proinfo.count}"  autocomplete="off" class="goods-num J_goodsNum" > 
                                            <a href="javascript:void(0)" class="J_plus updateCount"data-number="1">
                                                <i class="iconfont">+</i>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col col-total"> 
                                    <span id="pre-total">${proinfo.price*proinfo.count}元</span>
                                        <p class="pre-info">已优惠${proinfo.count*100}元 </p>
                                    </div>
                                    <div class="col col-action"> 
                                        <a id="1191300027_1_buy" data-msg="确定删除吗？" href="javascript:void(0);" title="删除" class="del J_delGoods">
                                            <i class="iconfont">x</i>
                                        </a> 
                                    </div>
                                </div>
                            </div>
                        </div>`
        } )
        $("#J_cartTotalNum").html(count)
        $("#J_cartListBody").html( strCon );
    }
  
    //结算
    
    function jiesuan(){
        var count = 0;//数量
        var money = 0;//总金额
        //结算的是被选中的复选框
        $(".J_itemCheckbox:checked").each(function(){
            count += Number($(this).parent().parent().find(".J_goodsNum").val());
            money += parseFloat($(this).parent().parent().find("#pre-total").html());
        })
        $("#J_selTotalNum").html( count );
        $("#J_cartTotalPrice").html( money );
    }
    
    //复选框点击  金额结算
    $(".J_itemCheckbox").click(function(){
        jiesuan();
    })
    //全选
    $("#J_selectAll").click(function(){
        $(".J_itemCheckbox").prop( "checked" , $(this).prop("checked") );
        jiesuan();
    })
    //加减功能
    $(".updateCount").click(function(){
        //确定要操作的商品编号
        var pid = $(this).parent().data("id");
       
        //取出操作商品的num值  确定操作的是+?   -?
        var num = $(this).data("number");
        //取出数量
        var count = $(this).next(".J_goodsNum").val();
        
        if( num == -1 && count == 1 ){
            return ;
        }
        //遍历数组
        var sum = 0;
        arr.forEach( (pro)=>{
            sum += pro.count
            console.log(sum)
            $("#J_cartTotalNum").html(sum)
            if( pro.id === pid ){
                pro.count += num;
                //将数组重新存入到storage中
                localStorage.setItem("shoplist",JSON.stringify( arr ) );
                //页面同步改变
                $(this).parent().find(".J_goodsNum").val( pro.count );
                //同步改变金额
                $(this).parent().parent().parent().find("#pre-total").html( pro.count*pro.price + "元" );
                $(this).parent().parent().parent().find(".pre-info").html( "已优惠"+pro.count*100 + "元" );
                jiesuan();
                return;
            }
            
        } )
    })
    
    //删除功能
    $("#J_cartListBody").on( "click" , ".J_delGoods" , function(){
        $(this).parent().parent().parent().parent().remove();
        //获取当前操作的商品编号  data()方法用于获取data-* 的自定义属性
        var pid = $(this).parent().parent().parent().parent().find(".J_changeGoodsNum").data("id");
        console.log(pid)
        //遍历数组  查找数组中哪一个商品编号 与 上面的pid一致  找到后将数组中的商品删除
        arr.forEach( (pro,index)=>{
            if( pro.id === pid ){
                //删除数组中的pro这个商品
                arr.splice(index,1);
                //将数组重新存入到storage中
                localStorage.setItem("shoplist",JSON.stringify( arr ) );
                jiesuan();
                return;
            }
        } )
    } )
}