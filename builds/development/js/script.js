


$(function(){
	$("main section button.btn").on("click",function(){
		if($("main section div").hasClass("in")){
			$("main section p").addClass("borderBottom");
		} else {
			$("main section p").removeClass("borderBottom");
		}
	});
});