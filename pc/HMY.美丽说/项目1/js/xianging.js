$(function(){
	    $("#images img").click(function (){
	     	var src = $(this).attr("src");
	     	//小图 大图
	     	$("#small img").attr("src",src);
	     	$("#big img").attr("src",src);
	     });

	     //2 鼠标移动 
	     $('#small').mousemove(function(ent){
	     	//大盒子显示 放大镜显示
	     	$("#datu").css("display","block");
	     	$("#move").css("display","block");

	     	//获得鼠标
	     	var ent  = ent || window.event;

	     	var m_w = $("#move").width();
	     	var m_h = $("#move").height();


	     	//放大镜不能出盒子范围 
	     	var minX = 0;
	     	var maxX = $("#small").width()-m_w;
	     	var minY = 0;
	     	var maxY = $("#small").height()-m_h;

	     	if(ent.pageX-m_w<minX){
	     		$("#move").css("left",0);
	     	}else if(ent.pageX-m_w>maxX){
	     		$("#move").css("left",maxX);
	     	}else{
	     		$("#move").css("left",(ent.pageX-m_w));
	     	}

	     	if(ent.pageY-m_h<minY){
	     		$("#move").css("top",0);
	     	}else if(ent.pageY-m_h>maxY){
	     		$("#move").css("top",maxY);
	     	}else{
	     		$("#move").css("top",(ent.pageY-m_h));
	     	}


	     	//大盒子随鼠标的移动位置
	     	$("#datu").scrollTop((ent.pageY-$("#small").offset().top)*2.5-250);
	     	$("#datu").scrollLeft((ent.pageX-$("#small").offset().left)*2.5-250);

	     	//放大镜的位置 (会出盒子范围)
	     	// $("#move").css("left",(ent.pageX-m_w));
	     	// $("#move").css("top",(ent.pageY-m_h));


			

	     	//添加鼠标样式
	     	$("#small").css("cursor","move");

	     });
	     //3 鼠标移出
	     $("#small").mouseout(function(){
	     	$("#big").css("display","none");
	     	$("#move").css("display","none");
	     	$("#small").css("cursor","default");
	     });

});
