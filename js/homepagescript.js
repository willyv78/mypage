

$(document).ready(function(){
			$('.slides12').bxSlider({
			  auto:true,
			  autoStart:true,
			  pager:false,
			  autoHover:false,
			  minSlides:3,
			  maxSlides:3,
			  slideWidth:440,
			  slideMargin:20,
			  pause:8000,
			  speed:1400,
			  controls:false
			});
			$('.slides13').bxSlider({
			  auto:false,
			  autoStart:true,
			  pager:false,
			  autoHover:false,
			  minSlides:3,
			  maxSlides:3,
			  moveSlides: 1,
			  slideWidth:720,
			  slideMargin:50,
			  pause:8000,
			  speed:1400,
			  controls:true
			});
		
			
		});

//script codes for home page simple animations
  $(function(){
	var hheight = $('#gallery').height();
	var winscrollheight = $(window).scrollTop();

	 
	 
	 
	 
	 var hheight = $('#services').height();
	 var winscrollheight = $(window).scrollTop();

		 $(window).scroll(function() {
		  if  ($(window).scrollTop() >500){
			$('.animate3').addClass("animate4");
			$('.animateleft').addClass("animateleft1");
		 }
		  if  ($(window).scrollTop() <500){
		 $('.animate3').removeClass("animate4");
			$('.animateleft').removeClass("animateleft1");
		 }
	});

 	var hheight = $('#portfolio').height();
	var winscrollheight = $(window).scrollTop();

	 $(window).scroll(function() {
	  if  ($(window).scrollTop() > 1000){
	 	$('li.serv1').addClass("serv-normal");
		$('li.serv2').addClass("serv-normal");
		$('li.serv3').addClass("serv-normal");
		$('li.serv4').addClass("serv-normal");
		$('li.serv5').addClass("serv-normal");
		$('ul.what_bg').addClass("what_bg_normal");
	 }
	  if  ($(window).scrollTop() < 1000){
	 $('li.serv1').removeClass("serv-normal");
		$('li.serv2').removeClass("serv-normal");
		$('li.serv3').removeClass("serv-normal");
		$('li.serv4').removeClass("serv-normal");
		$('li.serv5').removeClass("serv-normal");
		$('ul.what_bg').removeClass("what_bg_normal");
		}
	});
 
});
  

 $(window).load(function(){
	    window.setTimeout(function(){$('li.home_serv1').addClass("home_serv-normal");}, 1000);
		window.setTimeout(function(){$('li.home_serv2').addClass("home_serv-normal");}, 1000);
		window.setTimeout(function(){$('li.home_serv3').addClass("home_serv-normal");}, 1000);
		window.setTimeout(function(){$('li.home_serv4').addClass("home_serv-normal");}, 1000);
		window.setTimeout(function(){$('li.home_serv5').addClass("home_serv-normal");}, 1000);	
		window.setTimeout(function(){$("p.topanimate").addClass("loadedimg2");}, 1000);	
		window.setTimeout(function(){$(".botanimate").addClass("loadedimgbot");}, 1000);	
	 	
});
  

  
  
  
   
  
