$( document ).ready(start);


function start(){
	console.log("........");
	
	fixPosition();
	
	var folder = "img/gallery";
	//$("#test").append( "<img src='"+ folder + "27355767_1002871983201232_8523831166088096057_o.jpg" +"'>" );
	
	$.ajax({

		url : folder,
		success: function (data) {
			print(folder);
			$(data).find("a").attr("href", function (i, val) {
				if( val.match(/\.(jpe?g|png|gif|jpg)$/) ) { 
					print(folder);
					$("#test").append( "<img src='"+ folder + val +"'>" );
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


