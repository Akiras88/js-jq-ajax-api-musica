/****************************************************************************************
 * 
 * DISC
 * 
 * Through an Ajax call to Boolean's API we will have 	about ten music records available.
 * Using handlebars we print everything on the screen.
 * 
 * Bonus: Create a select with the following genres:   	
	pop, rock, metal and jazz. Based on   what we choose in the select we will see the  corresponding cd.
 *
 ****************************************************************************************/
$(document).ready(function() {
	
	var myApi = 'https://flynn.boolean.careers/exercises/api/array/music';
	var container = $('.cds-container');
	// init template
	var source = $("#entry-template").html();
	var template = Handlebars.compile(source);

	// call api
	$.ajax({
		url: myApi,
		method: 'GET',
		success: function(data) {
			var albumApi = data.response;
			for ( var i = 0; i < albumApi.length; i++ ) {
				var cd = albumApi[i];
				var albums = {
					poster : cd.poster,
					title : cd.title,
					author : cd.author,
					year : cd.year,
					genres : cd.genre.toLowerCase()
				}
				console.log(albums);
				// add template
				var html = template(albums);
				container.append(html);
			}
		},
		error: function() {
			console.log('Error');
		}
	});
	/*******************
	 * select genres
	 ******************/
	$('#genres').change(function() {

		var genre = $(this).val();

		if ( genre === 'all' ) {
			$('.cd').show();
		} else {
			$('.cd').hide();
			$('.cd.' + genre).show();
		}
	});

}); // end document ready