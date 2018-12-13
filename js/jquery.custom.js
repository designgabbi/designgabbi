$(document).ready(function(){
	
	//INDEX : TYPEWRITING ANMATION
      /*         <----------- Variables ----------------->               */
      var texts,back,index,x,count,p,time,div,delayInMilliseconds;
		texts = ['graphic designer          ',
			   'adventurer          ',
			   'team player          ',
			   'visual designer          ',
			   'artist          '];
		back = false;
		index = 0;
		count = 0;
		time = 150;
		delayInMilliseconds = 100
		p = $('.mainBnrTit h2');
		div = $('.yPaint');
		/*         <----------- Variables ----------------->               */
		function write(){
		x = setInterval(function(){
		  /*      <-   False      ->        */
		  if( back ==false )
		  {
			time=80;
			p.text( p.text() + texts[index][count] );
			count++;
			if( count == texts[index].length )
			{
			  clearInterval(x);
			  back = true;
			  if( index==texts.length  -1 )
			  {
				index = 0
			  }
			  else
			  {
				index++
			  }		                 
			  write();
			};
		  }
		  /*      <-   False      ->        */
		  /*      <-   [  True ]      ->        */
		  else
		  {
			time=200
			count--;
			p.text(    p.text().slice(0,count)        )
			if (count == 0 ) {
			  clearInterval(x);
			  back = false;
			  write();
			}
		  }
		  /*      <-   [  True ]      ->        */
		},time);
		};
		write();
    /*     <!-------------   End   --------------->         */
    //INDEX : MAINMENU HOVER
	$('.mnWeb').hover(function(){
		$(this).siblings('.mnWebBg').addClass('hover');
	},function(){
		$(this).siblings('.mnWebBg').removeClass('hover');
	});
	$('.mnBranding').hover(function(){
		$(this).siblings('.mnBrandingBg').addClass('hover');
	},function(){
		$(this).siblings('.mnBrandingBg').removeClass('hover');
	});
	$('.mnGraphic').hover(function(){
		$(this).siblings('.mnGraphicBg').addClass('hover');
	},function(){
		$(this).siblings('.mnGraphicBg').removeClass('hover');
	});
	$('.mnPackage').hover(function(){
		$(this).siblings('.mnPackageBg').addClass('hover');
	},function(){
		$(this).siblings('.mnPackageBg').removeClass('hover');
	});
	$('.mnFestival').hover(function(){
		$(this).siblings('.mnFestivalBg').addClass('hover');
	},function(){
		$(this).siblings('.mnFestivalBg').removeClass('hover');
	});
	$('.mnDrawing').hover(function(){
		$(this).siblings('.mnDrawingBg').addClass('hover');
	},function(){
		$(this).siblings('.mnDrawingBg').removeClass('hover');
	});
	$('.mnEditorial').hover(function(){
		$(this).siblings('.mnEditorialBg').addClass('hover');
	},function(){
		$(this).siblings('.mnEditorialBg').removeClass('hover');
	});
	
	//AOS
	AOS.init({
		easing: 'ease-in-out-sine'
	});
	
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

});