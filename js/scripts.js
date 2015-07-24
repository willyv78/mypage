// Scripts

$(document).ready(function(){
        $('#header,#footer-top').localScroll();
		
    })


$(window).load(function() {
	(function highlightNav() {
		var prev; //keep track of previous selected link
		var isVisible= function(el){
			el = $(el);
			
			if(!el || el.length === 0){
				return false
			};
	
			var docViewTop = $(window).scrollTop() + 50;
			var docViewBottom = docViewTop + $(window).height();
			
			var elemTop = el.offset().top;
			var elemBottom = elemTop + el.height();
			return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom));
		}
			
		$(window).scroll(function(){
			$('#nav ul li > a').each(function(index, el){
				el = $(el);
				if(isVisible(el.attr('href'))){
					if(prev){
						prev.removeClass('active');
					}
					el.addClass('active');
					prev = el;
					
					//break early to keep highlight on the first/highest visible element
					//remove this you want the link for the lowest/last visible element to be set instead
					return false; 
				}
			});
		});
		
		//trigger the scroll handler to highlight on page load
		$(window).scroll();
	})();
});




