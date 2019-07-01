define( ()=>{
	return {
		checkName : function(strname){
			var reg = /^\d{11}$/;
			if( reg.test( strname ) ){
				return true;
			}else{
				return false;
			}
		},
		checkPwd : function(strpwd){
			var reg = /^.{6,18}$/;
			if( reg.test( strpwd ) ){
				return true;
			}else{
				return false;
			}
		}
	}
} )
