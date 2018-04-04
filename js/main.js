$( document ).ready(start);


function start(){
	console.log("........");
	
	fixPosition();
	
	
}


function fixPosition(){
	//postion the icons for social media
	var x = $(window).width();
	var y = $("#home").height();
	$("#socialMedia").css("left",x/2 - $("#socialMedia").width()/2);
	$("#socialMedia").css("bottom", 80);
	
	
	//calculated the width
	
	var t = Math.floor(x/500);
		t = Math.min($("#events").children().length,t);
	print(t);
	$(".grid").css("grid-template-columns", "repeat("+t+", minmax(500px,1fr))")
	
	
}

function print(x){
	console.log(x);
}




$(window).on('resize',function(){
	fixPosition();
});


