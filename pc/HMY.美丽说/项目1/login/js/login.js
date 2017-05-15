$(function(){
    // 点击验证
   	$("#text").focus(function(){
   		$("#texthidden").css("visibility","visible");
   	}).blur(function(){
         var text=$("#texthidden td p");
         if($("#text").html(""))
         {
          text.html("用户名不能为空");
          $("#texthidden").css("visibility","visible").css("color","red");
        }
         if($("#text").html("22"))
        {
            text.html("用户名不能为空");
          $("#texthidden").css("visibility","visible").css("color","red");
        }

          
        
   	});
   	$("#pwd").focus(function(){
   		$("#pwdhidden").css("visibility","visible");
   	}).blur(function(){
   		  var text=$("#pwdhidden td p");
         if($("#pwd").html(""))
         {
          text.html("密码不能为空");
          $("#pwdhidden").css("visibility","visible").css("color","red");
        }

   	});

});