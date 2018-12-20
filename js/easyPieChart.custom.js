$(document).ready(function(){
	//ABOUT : PIE CHART
	$(window).scroll(function () {
		var height = $(document).scrollTop();
		if(height > 600){
			$('.chart').easyPieChart({
				scaleColor: false,
				lineWidth: 10,
				lineCap: 'round',
				barColor: '#031da8',
				size: 130,
				animate: 1000
			});
			
		}else{
		}
	});
});