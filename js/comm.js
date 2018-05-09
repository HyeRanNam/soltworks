$(document).ready(function() {
	$('#fullpage').fullpage({
		verticalCentered: false,

		//to avoid problems with css3 transforms and fixed elements in Chrome, as detailed here: https://github.com/alvarotrigo/fullPage.js/issues/208
		css3:false,
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
		menu: '#menu',
		afterLoad: function(anchorLink, index){

			//section 1
			if(index == 1){
				/* opcity */
				$('#section0').find('.intro').fadeIn(500);
			}
			//section 2
			if(index == 2){
				/* opcity */
				$('#section1').find('.intro').fadeIn(500);
				$('#section1').find('.vertual_cont').fadeIn(1000);
			}
			//section 3
			if(index == 3){
				/* opcity */
				$('#section2').find('.intro').fadeIn(500);
				$('#section2').find('.vr_box01').fadeIn().css('top','35%').css('height','40%').css('transition','1s');
				$(function(){
					$('#section2').find('.vr_box02').animate({top:'35%',height:'40%',transition:'1s'}, 200);
				});
				$(function(){
					$('#section2').find('.vr_box03').animate({top:'35%',height:'40%',transition:'1s'},500);
				});
			}
			//section 4
			if(index == 4){
				/* opcity */
				$('#section3').find('.intro').fadeIn(500);
				$('#section3').find('.img_phone01').css('bottom','11%');
				$('#section3').find('.img_phone02').css('bottom','-10%');
				$('#section3').find('.img_phone03').css('right','-10%');
			}
		}
	});

});