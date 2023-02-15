/* the Sarang custom js */
$(document).ready(function(){
	/* fullpage */
	new fullpage('#fullpage', {
		navigation: true,
		sectionsColor: ['#f2f2f2', '#464fa2', '#ec1f27', '#ffdd17'],
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'lastPage'],
		afterLoad: function(origin, destination, direction){
			var loadedSection = this;
			
			//mainBnr3 : #header change red to white
			$('.change').each(function(){
				var a=$(this);
				var img=a.find('img');
				var red=img.attr('src');
				var red_reset=img.attr('src').replace('_w','_r');
				var white=red.replace('_r','_w');
				if(destination.index == 2){
					img.attr('src',white);
				}else{
					img.attr('src',red_reset);
				}
			})
			
			// sliderControl
			if(destination.index == 1){
				$('.slideTit').css("color","#ffdd15");
				$('.slideTit span').text('붙 이 다');
				$('.slideMenu').css("border-top","1px solid #ffdd15");
				$('.slideMenu li').removeClass('active');
                $('.slideMenu li:nth-child(2)').addClass('active');
				$('#fp-nav ul li a span').css('background','#eb1f26');
				$('#fp-nav ul li a.active span').css('background','#ffdd15');
				//animiation
				$('.bnr02Aid').animate({'opacity':'1'},800);
				$('.bnr01Heart').css('bottom','');
				$('.bnr01Spark').css('opacity','');
				$('.bnr04Scoop').css('bottom','');
				$('.bnr04BBeans').css({
					'bottom':'',
					'left':''
				});
				$('.bnr04BBean').css({
					'top':'',
					'left':''
				});
				$('.bnr04RBeans').css('top','');
			}else if(destination.index == 2){
				$('.slideTit').css("color","#fff");
				$('.slideTit span').text('그 리 다');
				$('.slideMenu').css("border-top","1px solid #fff");
				$('.slideMenu li').removeClass('active');
                $('.slideMenu li:nth-child(3)').addClass('active');
				$('#fp-nav ul li a span').css('background','');
				$('#fp-nav ul li a.active span').css('background','#fff');
				//animiation
				var docStyle = document.documentElement.style;

				// setting CSS variables inside this JS where they 
				// can be declaratively used inside the CSS file.
				document.addEventListener('mousemove', function(e) {
				  docStyle.setProperty('--mouse-x', e.clientX);
				  docStyle.setProperty('--mouse-y', e.clientY);
				});
				$('.bnr01Heart').css('bottom','');
				$('.bnr01Spark').css('opacity','');
				$('.bnr02Heart').css('opacity','');
				$('.bnr02Aid').css('opacity','');
				$('.bnr04Scoop').css('bottom','');
				$('.bnr04BBeans').css({
					'bottom':'',
					'left':''
				});
				$('.bnr04BBean').css({
					'top':'',
					'left':''
				});
				$('.bnr04RBeans').css('top','');
			}else if(destination.index == 3){
				$('.slideTit').css("color","#4750a1");
				$('.slideTit span').text('우 리 다');  
				$('.slideMenu').css("border-top","1px solid #4750a1");
				$('.slideMenu li').removeClass('active');
				$('.slideMenu li:nth-child(4)').addClass('active');
				$('#fp-nav ul li a span').css('background','#eb1f26');
				$('#fp-nav ul li a.active span').css('background','#4750a1');
				//animiation
				$(function startAnimation(){
					$('.bnr04Scoop').animate({'bottom':'-15vh'},2000,$.bez([0.715, -0.005, 0.190, 1.005]));
					$('.bnr04BBeans').animate({
						'bottom':'10vh',
						'left':'20vw'
					},2000,$.bez([0.715, -0.005, 0.190, 1.005]));
					$('.bnr04BBean').animate({
						'top':'30vh',
						'left':'3vw'
					},2000,$.bez([0.715, -0.005, 0.190, 1.005]));
					$('.bnr04RBeans').animate({'top':'-2vh'},2000,$.bez([0.715, -0.005, 0.190, 1.005]));
				});
				$('.bnr01Heart').css('bottom','');
				$('.bnr01Spark').css('opacity','');
				$('.bnr02Heart').css('opacity','');
				$('.bnr02Aid').css('opacity','');
				//anchor color
			}else{
				$('.slideTit').css("color","#eb1f26");
				$('.slideTit span').text('담 다');  
				$('.slideMenu').css("border-top","1px solid #eb1f26");
				$('.slideMenu li').removeClass('active');
				$('.slideMenu li:nth-child(1)').addClass('active');
				$('#fp-nav ul li a span').css('background','#eb1f26');
				//animiation
				$(function startAnimation(){
					$('.bnr01Heart').animate({'bottom':'-10vh'},1500,$.bez([0.715, -0.005, 0.190, 1.005]));
					$('.bnr01Spark').delay(1300).animate({'opacity':'1'},1000);
				});
				$('.bnr02Heart').css('opacity','');
				$('.bnr02Aid').css('opacity','');
				$('.bnr04Scoop').css('bottom','');
				$('.bnr04BBeans').css({
					'bottom':'',
					'left':''
				});
				$('.bnr04BBean').css({
					'top':'',
					'left':''
				});
				$('.bnr04RBeans').css('top','');
			}
		}
	});

})