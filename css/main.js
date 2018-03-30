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
	
	
}

function print(x){
	console.log(x);
}




$(window).on('resize',function(){
	fixPosition();
});
