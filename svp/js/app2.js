$(document).ready(function(){

	$('#player').videre({
		video: {
			quality: [
				{
					label: 'Low',
					src: 'videos/dura/90p.mp4'
				},
				{
					label: 'Medium',
					src: 'videos/dura/288p.mp4'
				},
				{
					label: 'High',
					src: 'videos/dura/1080p.mp4'
				},
			],
			title: 'Dura - Daddy Yankee'
		},
		//Use 1120
		dimensions: 864
	});

});