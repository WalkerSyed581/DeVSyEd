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
});