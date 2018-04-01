<?php
	function print( $data ) {
		$output = $data;
		if ( is_array( $output ) )
			$output = implode( ',', $output);

		echo "<script>console.log( 'Debug Objects: " . $output . "' );</script>";
	}
	
	$folder = 'img/gallery';
	print(folder);
	//$("#test").append( "<img src='"+ folder + "27355767_1002871983201232_8523831166088096057_o.jpg" +"'>" );
	 
	$.ajax({

		url : folder,
		success: function (data) {
			
			$(data).find("a").attr("href", function (i, val) {
				if( val.match(/\.(jpe?g|png|gif|jpg)$/) ) { 
					echo(folder);
					$("#test").append( "<img src='"+ folder + val +"'>" );
				} 
			});
		}
	});
	
	
	
?>