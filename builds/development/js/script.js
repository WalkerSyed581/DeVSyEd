


$(function(){
	$("main section button.btn").on("click",function(){
		if($("main section div").hasClass("in")){
			$("main section p#intro").addClass("borderBottom");
		} else {
			$("main section p#intro").removeClass("borderBottom");
		}
	});
	$('.carousel').carousel({
		interval: 10000,
		pause: false,
		wrap: false
	});
	$('.navbar li.disabled a').on("click",function(e){
		e.preventDefault();
	});
	
	$('li.list-group-item').on('click',function(e){
		$("ol.list-group li.list-group-item").find('span.glyphicon-remove').removeClass("glyphicon-remove").addClass("glyphicon-menu-down");
		$(this).find('span.glyphicon').removeClass("glyphicon-menu-down").addClass("glyphicon-remove");
		var targetSong = $(this).data("song");
		switch(targetSong){
			case "finalMasquerade":
				$("ol.list-group li.list-group-item iframe").remove();
				$(this).append("<iframe width='100%' height='450' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/157980361&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe>");
			    break;
		    case "beSomebody":
				$("ol.list-group li.list-group-item iframe").remove();
				$(this).append("<iframe width='100%' height='450' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/52649989&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe>");
			    break;
			case "followYou":
				$("ol.list-group li.list-group-item iframe").remove();
				$(this).append("<iframe width='100%' height='450' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/224119823&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe>");
			    break;    
			case "hero":
				$("ol.list-group li.list-group-item iframe").remove();
				$(this).append("<iframe width='100%' height='450' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/181958145&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe>");
			    break;				   
			case "throne":
				$("ol.list-group li.list-group-item iframe").remove();
				$(this).append("<iframe width='100%' height='450' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/235047336&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe>");
		}
		$(this).find('button').has('span.glyphicon').on('click',function(e){
			console.log(e.target.className);
			if(e.target.className == "glyphicon glyphicon-remove"){
			e.stopPropagation();
			$(this).next('iframe').remove();
			$(this).find('span.glyphicon.glyphicon-remove').removeClass("glyphicon-remove").addClass("glyphicon-menu-down");
			}
		});	 
	});
});