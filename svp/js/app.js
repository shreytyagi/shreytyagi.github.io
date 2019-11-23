$(document).ready(function(){

	$('#player').videre({
		video: {
			quality: [
				{
					label: 'Low',
					src: 'videos/thor/144p.mp4'
				},
				{
					label: 'Medium',
					src: 'videos/thor/360p.mp4'
				},
				{
					label: 'High',
					src: 'videos/thor/1080p.mp4'
				},
			],
			title: 'Thor Ragnarok Trailer'
		},
		dimensions: 1165
	});

});