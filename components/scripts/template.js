$(function(){
	$("main section button.btn").on("click",function(){
		$("main section p").toggleClass("borderBottom");
	});
});