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
	var container = $('.container');

	// init template
	var source = $("#entry-template").html();
	var template = Handlebars.compile(source);
	// call api
	$.ajax({
		url: myApi,
		method: 'GET',
		success: function(data) {
			var albumApi = data.response[0];
			var albums = {
				poster : albumApi.poster,
				title : albumApi.title,
				author : albumApi.author,
				year : albumApi.year
			}
			console.log(albums);
			// add template
			var html = template(albums);
			container.append(html);
		},
		error: function() {
			console.log('Error');
		}
	});




}); // end document ready