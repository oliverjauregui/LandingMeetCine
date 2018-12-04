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
	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll < 100){
			if(!flag){
				$("header").css({"background": "transparent"});
				flag = true;
			}
		}else{
			if(flag){
				$("header").css({"background-color": "transparent"});
				flag = false;
			}
		}


	});

	$('.owl-carousel').owlCarousel({
		loop:true,
		margin: 10,
		responsiveClass:true,
		autoplay:true,
        autoplayTimeout:1700,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	})
	$('.owl-carousel2').owlCarousel({
		loop:true,
		margin: 10,
		responsiveClass:true,
		autoplay:true,
        autoplayTimeout:4000,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})

});