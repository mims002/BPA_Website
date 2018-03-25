$( document ).ready(start);


function start(){
	console.log("........");
	
	fixPosition();
	
	var folder = "img/gallery";
	var fileextension = ".jpg";
	print(folder);
	$.ajax({
		url : folder,
		success: function (data) {
			$(data).find("a").attr("href", function (i, val) {
				if( val.match(/\.(jpe?g|png|gif)$/) ) { 
					print(folder);
					$("body").append( "<img src='"+ folder + val +"'>" );
				} 
			});
		}
	});
	
}


function fixPosition(){
	//postion the icons for social media
	var x = $(window).width();
	var y = $("#home").height();
	$("#socialMedia").css("left",x/2 - $("#socialMedia").width()/2);
	$("#socialMedia").css("bottom", 80);
	
	
}

function print(x){
	console.log(x);
}




$(window).on('resize',function(){
	fixPosition();
});


