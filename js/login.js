//引入模块  并重命名
requirejs.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		"vd" : "myValidate"
	}
})

//调用模块功能
requirejs( ["jquery","vd"] , ($,vd)=>{
	//实现验证
	$("form").submit(function(){
		if( flagName && flagPwd ){
			return true;
		}
		return false;
	})
	//失去焦点验证
	//用户名
	var flagName = null;
	$("#uname").blur( function(){
		if( vd.checkName( $(this).val() ) ){
			flagName = true;
			$("#s1").html( "ok" );
		}else{
			flagName = false;
			$("#s1").html( "3--8个单词字符" );
		}
	} )
	//密码
	var flagPwd = null;
	$("#upwd").blur( function(){
		if( vd.checkPwd( $(this).val() ) ){
			flagPwd = true;
			$("#s2").html( "ok" );
		}else{
			flagPwd = false;
			$("#s2").html( "6--18个字符" );
		}
	} )
} )
