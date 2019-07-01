//引入模块  并重命名
requirejs.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		"reg" : "register",
		"cookie":"jquery.cookie"
	}
})			

//调用模块功能
requirejs( ["jquery","reg","cookie"] , ($,reg)=>{
	//实现验证
	
	$("form").submit(function(){
		if(!flagItem){
			$("#item").html( "! 请先阅读条款" );
		}else{
			if(flagName && flagPwd){
			//存用户名	
			$.cookie( "userinfo" ,JSON.stringify( {"uname":$("#uname").val(),"upwd":$("#upwd").val()} ) , { expires : 3 } );
				return true;
			}
		}
		return false;//遇到false才会阻止跳转
		
	})
	
	//失去焦点验证
	//用户名
	var flagName = null;
	$("#uname").blur( function(){
		if( reg.checkName( $(this).val() ) ){
			flagName = true;
			$("#al").html( "输入正确" );
		}else{
			flagName = false;
			$("#al").html( "输入有误" );
		}
	} )
	//密码
	var flagPwd = null;
	$("#upwd").blur( function(){
		if( reg.checkPwd( $(this).val() ) ){
			flagPwd = true;
			$("#pwd_val").html( "输入正确" );
		}else{
			flagPwd = false;
			$("#pwd_val").html( "请输入6--18个字符" );
		}
	} )
	//选条款
	var flagItem = false;
	$("#m_btn").click(function (){
		if( !flagItem ){
			$(this).css({"background":"#ff6700","border":"0"})
			flagItem = true;
			$("#item").html( "!已阅读条款" );
		}
	})


	//登录验证
	var strU = JSON.parse( $.cookie("userinfo") ).uname ;
	var strP = JSON.parse( $.cookie("userinfo") ).upwd ;
	$("#log_btn").click(function(){
		if( strU == $("#log_name").val() && strP == $("#log_pwd").val()){
			location.href = "index.html";
		}else{
			alert("输入有误，请重新输入");
		}
	})

	//登录选项卡
	$(" .log").click(function (){
		$(".scan").css("display","block");
		$(".form_main").css("display","none");
		$(".count").css("color","#757575");
		$(".log").css("color","#ff6700")
    })
    $(".count").click(function (){
		$(".scan").css("display","none");
		$(".form_main").css("display","block");
		$(".count").css("color","#ff6700");
		$(".log").css("color","#757575");
    })
} )
