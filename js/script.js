$(document).ready(function(){
	$("td").not(".backspace").click(function(){
		var txt = $("#screen").text();
		$("#screen").text(txt+$(this).text());
	});
	$("td").on({
		mouseenter: function(){
			$(this).css({"background-color": "black","color": "white","cursor": "pointer"});
		},
		mouseleave: function(){
			$(this).css({"background-color": "white","color": "black"});
		}		
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