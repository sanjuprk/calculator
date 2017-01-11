$(document).ready(function(){
	$("td").not(".backspace").click(function(){
		var txt = $("#screen").text();
		$("#screen").text(txt+$(this).text());
	});
	$("#bk").click(function(){
		var txt = $("#screen").text();
		$("#screen").text(txt.substr(0,txt.length-1));	
	});
	$("#cl").click(function(){
		var txt = "";
		$("#screen").text(txt);
	});
	$("#equalto").click(function(){
		var txt = $("#screen").text();
		$("#screen").text(eval(txt));
	});
});