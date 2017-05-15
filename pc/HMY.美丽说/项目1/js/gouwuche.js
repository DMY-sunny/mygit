//购物车开始
$(function(){
		var m=0;
		var total=0;
	$(".content4-content button").click(function(){
		
		
		if($(this).html()=="+"){
			//alert(123);
			m=$(this).parent().next("td").find("span").html();
			m++;
			$(this).parent().next("td").find("span").html(m);
			solve();
		}else{
			//alert(45);
			m=$(this).parent().prev("td").find("span").html();
			m--;
			if(m<1){ 
				$(this).parent().parent().parent().parent().parent().hide();
				$(this).parent().parent().parent().parent().parent().prev().prev().remove();
				return false;
			}else{
				$(this).parent().prev("td").find("span").html(m);
				
			}
			solve();
			
		}
	});
	var pre;
	var up_down;
	function solve(){
		
//		$(".content4-content tr td button").each(function(){
//			 up_down=$(".w2_1").html();
//			 pre=$(this).parent().parent().parent().parent().prev(".content4-left2").find("p").eq(0).html();
//			 total+=up_down*pre;
//			 
//			//console.log(pre);
//		});
//		$(".jg").each(function(){
//			按钮里面的值
			var w2_1 = $(".w2_1").html();
//			console.log(w2_1);
			//上面的表单
			jg_1=$(".jg").html();
			diyi=w2_1 * jg_1;
//			console.log(diyi);
//			console.log(jg_1);
			//下面的表单
			jg_2 = $(".jg").html();
			dier = w2_1 *jg_2;
//			console.log(dier);
			//总额
			zs = diyi + dier ;
			
			
//			pre=$(this).find(".content4-content").find("tr").find("td").eq(1).find("span").html();
//			up_down=$(this).find(".content4-left2").find("p").eq(0).html();
//			jg_1+=jg_2;
			
//		});
		$(".bold").html(parseFloat(zs).toFixed(2));
	
	}
	solve();
	
	
	
	
	
	
	
	
	
	
	
	
	

	   		//求和
//	   		function rowSum(){
//		   		var len = $("tr").size();
//		   		var tr = $("tr:lt("+(len-1)+"):gt(0)");		   		
//		   		var total = 0;
//		   		tr.each(function(){
//		   			var price = $(this).find("td").eq(3).html();
//		   			var num = $(this).find("td").eq(4).find("span").html();
//		   			var sum = price*num;
//
//		   			$(this).find("td").eq(5).html(sum);
//
//		   			total += sum;
//		   		});
//
//		   		$("tr:last").find("td").html("总计:"+total);
//
//		   }
//
//	   		rowSum();
});
//购物车结束