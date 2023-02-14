$(document).ready(function(){
    
    //SUB : SLICK
	 $('.variable-width').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true,
		prevArrow:'<i class="fas fa-angle-left"></i>',
		nextArrow:'<i class="fas fa-angle-right"></i>'
	});
    
}