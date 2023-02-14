//문서생성 - 김예진 2023.02.12
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
    
}