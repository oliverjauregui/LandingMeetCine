$(document).ready(function(){
	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 100){
			if(!flag){
				$("header").css({"background": "linear-gradient(#fe664e, #fb334e)"});
				flag = true;
			}
		}else{
			if(flag){
				$("header").css({"background-color": "transparent"});
				flag = false;
			}
		}


	});

});