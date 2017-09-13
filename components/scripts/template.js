$(function(){
	$('body').append("<script type='text/javascript src='//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-59a3bd186c545881'></script>"); 
	$('body').append("<script type='text/javascript' src='//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-59a3bd186c545881'></script>");
	function checkSizeAndApply(){
		if((window.innerWidth >= 768) && (document.title !== "Dev Syed")){
			$("main section div").addClass('in');
		} else if((window.innerWidth < 768) && (document.title !== "Dev Syed")){
			$("main section div").removeClass('in');
		}
		if((window.innerWidth <= 768) && (document.title !== "Hire Me | Dev Syed")){
			$('.carousel').carousel({
			  interval: 10000
			});
		} else if ((window.innerWidth >= 992) && (document.title == "Hire Me | Dev Syed")){
			$('.carousel').carousel({
			  interval: 10000
			});
		} else {
			$('.carousel').carousel('pause');
		}
		if((window.innerWidth <= 992) && (!(document.querySelector(".carousel div.item"))) && (document.title !== "Hire Me | Dev Syed")){
			$(".carousel").find("section.specialSection").wrapAll("<div class='carousel-inner'>").wrap("<div class='item'>");
			$(".carousel div.item:first").addClass("active");
			console.log(window.innerWidth);
		} else if ((window.innerWidth >= 992) && ((document.querySelector(".carousel div.item"))) && (document.title !== "Hire Me | Dev Syed")) {
			$(".carousel div.item").removeClass("item active");
		}
	}
	checkSizeAndApply();
	window.onresize = function(){
		checkSizeAndApply();
	}
	$("main section button.btn").on("click",function(){
		if($("main section div").hasClass("in")){
			$("main section p#intro").addClass("borderBottom");
		} else {
			$("main section p#intro").removeClass("borderBottom");
		}
	});
	$('.navbar li.disabled a').on("click",function(e){
		e.preventDefault();
	});
	
	$('li.list-group-item').on('click',function(e){
		$("ul.list-group li.list-group-item").find('span.glyphicon-remove').removeClass("glyphicon-remove").addClass("glyphicon-menu-down");
		$(this).find('span.glyphicon').removeClass("glyphicon-menu-down").addClass("glyphicon-remove");
		var targetSong = $(this).data("song");
		switch(targetSong){
			case "finalMasquerade":
				$("ul.list-group li.list-group-item iframe").remove();
				$(this).append("<iframe width='100%' height='450' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/157980361&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe>");
			    break;
		    case "beSomebody":
				$("ul.list-group li.list-group-item iframe").remove();
				$(this).append("<iframe width='100%' height='450' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/52649989&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe>");
			    break;
			case "followYou":
				$("ul.list-group li.list-group-item iframe").remove();
				$(this).append("<iframe width='100%' height='450' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/224119823&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe>");
			    break;    
			case "hero":
				$("ul.list-group li.list-group-item iframe").remove();
				$(this).append("<iframe width='100%' height='450' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/181958145&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe>");
			    break;				   
			case "throne":
				$("ul.list-group li.list-group-item iframe").remove();
				$(this).append("<iframe width='100%' height='450' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/235047336&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe>");
		}
		$(this).find('button').has('span.glyphicon').on('click',function(e){
			console.log(e.target.className);
			if(e.target.className == "glyphicon glyphicon-remove"){
			e.stopPropagation();
			console.log(this);
			$(this).next('iframe').remove();
			$(this).find('span.glyphicon.glyphicon-remove').removeClass("glyphicon-remove").addClass("glyphicon-menu-down");
			}
		});	 
	});
});