$(function(){
	// 表单验证
	// 注册用户名验证
	 $("#username").focus(function(){
			$("#username2").css("display","block").addClass("jinggao");
		}).blur(function(){
			useryz();
		});
	function useryz(){
		if($("#username").val()=="")
		{
			$("#username2").html("用户名不能为空").addClass("jinggao");
			return false;
		}
		else
		{
			$.ajax({
			url:"action/3.php",
			type:"post",
			data:"uname="+$("#username").val(),
			dataType:"text",
			success:function(data)
			{
				if(data==2)
				{
					$("#username2").html("用户名验证成功").addClass("yzcg");
					return true;
				}
				else
				{
					$("#username2").html("用户名已经存在,请重新注册").addClass("error");	
                    return true;
				}
			},
			error:function(){
				console.log("错误");
				return false;
			}
		  })
		}
	   
	}
	
	// 密码验证
  $("#pwd").focus(function(){
	$("#pwd2").css("display","block").addClass("jinggao");
	}).blur(function(){
		pwdyz();
	})
  function pwdyz(){
		if($("#pwd").val()=="")
		{
			$("#pwd2").html("密码不能为空").addClass("jinggao");
			return false;
		}
		else{
			var patt=/^\d{6,8}$/;
			if(patt.test($("#pwd").val()))
			{
				$("#pwd2").html("密码验证成功").addClass("yzcg");	
				return true;
			}
			else
			{
				$("#pwd2").html("密码格式错误,请重新输入").addClass("error");	
				return false;
			}
		 }
	
  }
	
	// 再次输入密码验证
	function repwdyz(){
		$("#repwd").focus(function(){
		$("#repwd2").css("display","block").addClass("jinggao");
	    }).blur(function(){
		if($("#repwd").val()=="")
		{
			$("#repwd2").html("确认密码不能为空").addClass("jinggao");
			return false;
		}
		else{
			if($("#pwd").val()==$("#repwd").val())
			{
				$("#repwd2").html("密码一致").addClass("yzcg");	
				return true;
			}
			else
			{
               $("#repwd2").html("两次密码不一致").addClass("error");	
               return false;
			}
				
			
		   }
	   });
	}
   //验证码验证
   $("#yzm").focus(function(){
   	 $("#yzm2").css("display","block").addClass("jinggao");
   }).blur(function(){
   	yzmyz();
   });
   function yzmyz(){
   	if($("#yzm").val()=="7364")
   	{
   		$("#yzm2").html("验证码正确").addClass("yzcg");	
   		return true;
   	}
   	else
   	{
   		$("#yzm2").html("验证码错误").addClass("error");
   		return false;
   	}
   }
   $("form").submit(function(){
   	return (useryz() && pwdyz() && repwdyz() && yzmyz());
   });
});