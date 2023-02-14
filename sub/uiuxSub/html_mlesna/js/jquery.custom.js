/* mlesna custom js */
$(document).ready(function(){
	/* mySidenav : accordian */
	var accordion=$(this);
	var allMenu=accordion.find('.accorMenu');
	var allList=accordion.find('.accorMenuList');
	allList.hide();
	allMenu.css('cursor','pointer');
	allMenu.click(function(){
		var theMenu=$(this);
		var theList=theMenu.next();
		var result=allList.not(theList);
		theList.slideToggle();
		result.slideUp();
	});
})