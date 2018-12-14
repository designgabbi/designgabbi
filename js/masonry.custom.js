$(document).ready(function(){
		//SUB : MASONRY
	var $grid = $('.grid').masonry({
		// options...
		itemSelector: '.grid-item',
		horizontalOrder: true,
		percentPosition: true
	});
	// layout Masonry after each image loads
	$grid.imagesLoaded().progress( function() {
		$grid.masonry('layout');
	});
});