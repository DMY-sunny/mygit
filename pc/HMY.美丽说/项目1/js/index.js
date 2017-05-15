//轮播图特效
$(function(){
		//打印的是图片中的class
		// console.log(list[0]);
		// //打印数字中的class
		// console.log(numlist[0].firstElementChild);
		var time = null;
		var m=0;//这里的m非常重要后面都会用到 全局变量 
		//1 图片轮播
		function autoRun(){
			time = setInterval(function (){
				
				$("#lun li").removeClass();
				$("#num_list span").removeClass();
				
				m++;
				if(m>5){
					m=0;
				}
				$("#lun li").eq(m).addClass("active");
				$("#num_list span").eq(m).addClass("active_num");

			},1000);
		}
			autoRun();
		
		//2 div盒子添加移入移出事件
		$("#lun").mouseover(function(){
			clearInterval(time);
			$("#left").css("display","block");
			$("#right").css("display","block");
			$(this).css("cursor","pointer");
			
		}).mouseout(function(){
			autoRun();
			$("#left").css("display","none");
			$("#right").css("display","none");
			$(this).css("cursor","default");
		});

		//3 给每个数字点击事件
		$("#num_list span").each(function(){
			
			$(this).click(function(){
				$("#lun li").removeClass();
				$("#num_list span").removeClass();

				m = $(this).html()-1;
				// console.log(m);
				$("#lun li").eq(m).addClass("active");
				$("#num_list span").eq(m).addClass("active_num");
			});
		});

		
		//4 左右箭头添加点击事件
		$("#left").click(function(){
			$("#lun li").removeClass();
			$("#num_list span").removeClass();

			m--;
			if(m<0){
				m=5;
			}
			$("#lun li").eq(m).addClass("active");
			$("#num_list span").eq(m).addClass("active_num");
		});

		$("#right").click(function(){
			$("#lun li").removeClass();
			$("#num_list span").removeClass();

			m++;
			if(m>5){
				m=0;
			}
			$("#lun li").eq(m).addClass("active");
			$("#num_list span").eq(m).addClass("active_num");
		});


//轮播图结束
//可选按钮广告开始
// $(function (){
//          $("#niu_left li").mouseover(function (){
//              $("#center li").eq($(this).index()).show().siblings("li").hide();
//          });
//
//          $("#niu_right li").mouseover(function (){
//              $("#center li").eq($(this).index()+9).show().siblings("li").hide();
//          });
//      });
//广告结束
//右下角广告开始

            $(".ad")
                .slideDown()
                .slideUp(1000)
                .fadeIn(1000)
                .find("span").click(function(){
                    $(this).parent().fadeOut();
                });

       
//右下角广告结束
//楼层定位		开始
 
         	 
         	$(window).scroll(function(){
         		var change_top=$(document).scrollTop();
         		if(change_top>=$(".subnav>ul>li").eq(0).offset().top&&change_top<$(".subnav>ul>li").eq(1).offset().top){
         			$(".subnav>ul>li").eq(0).addClass(".changes").siblings().removeClass("changes");
         			console.log(90);
         		}else if(change_top>=$(".subnav>ul>li").eq(1).offset().top&&change_top<$(".subnav>ul>li").eq(2).offset().top){
         			$(".subnav>ul>li").eq(1).addClass(".changes").siblings().removeClass("changes");
         		}else if(change_top>=$(".subnav>ul>li").eq(2).offset().top&&change_top<$(".subnav>ul>li").eq(3).offset().top){
         			$(".subnav>ul>li").eq(2).addClass(".changes").siblings().removeClass("changes");
         		}
         	});
		      var opss;
		      //点击下滑
			$(".subnav>ul>li").not($(".oness")).click(function(){
				 opss=$(".dqwz").eq($(this).index()).offset().top;
				 pp = $(".dqwz").length;
				 console.log(pp);
				$("body").animate({"scrollTop":opss},1000);
			});
			
			$(".oness").click(function(){
				$("body").animate({"scrollTop":0},1000);
			});


	




//楼层定位		结束		

//选项卡	开始
//		// 遍历，给每一个li，设置over事件
		var list = document.getElementById('menu').children[0].children;

		 console.log(list);

		// 遍历，给每一个li，设置over事件
		for(var i=0;i<list.length;i++){
			// 鼠标进入
			list[i].onmouseover = function(){
				// 当前元素的背景，设置为灰色
				this.style.background = '#F7F7F7';

				// 子元素ul显示
				this.children[2].style.display = 'block';
				// console.log(this.children[0]);
			}

			// 鼠标离开
			list[i].onmouseout = function(){
				// 取消背景
				this.style.background = '';

				// 当鼠标离开时，儿子ul隐藏
				this.children[2].style.display = 'none';
			}
		}
		var love = document.getElementById('menu').children[0].children[0].children[2].children;
		for(var i=0;i<love.length;i++){
			// 鼠标进入
			love[i].onmouseover = function(){
				// 当前元素的背景，设置为灰色
				this.style.background = '#F7F7F7';

				// 子元素ul显示
				
				// console.log(this.children[0]);
			}

			// 鼠标离开
			love[i].onmouseout = function(){
				// 取消背景
				this.style.background = '';

				// 当鼠标离开时，儿子ul隐藏
				// this.children[2].style.display = 'none';
			}
		}
		});
//选项卡	结束

