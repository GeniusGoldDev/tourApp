function loadscroler(){
	
}
$(document).on('ready',function(){ 
	"use strict";
	loadscroler();
	
	
	/*slideshow script code start here*/
	$('.slideshow').owlCarousel({
		items: 1,
		autoPlay: 5000,
		singleItem: true,
		navigation: true,
		navigationText: false,
		pagination: true,
	});
	/*slideshow script code end here*/
	
	/*testimonails script code start here*/
	$('.testimonails').owlCarousel({
		items: 2,
		itemsDesktop : [1199, 2],
		itemsDesktopSmall : [979, 2],
		itemsTablet : [768, 1],
		itemsMobile : [479, 1],
		navigation : false,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem : false,
		navigationText: ['<i class="fa fa-angle-left fa1"></i>', '<i class="fa fa-angle-right fa2"></i>'],
		pagination: true,
	});
	/*testimonails script code end here*/
	
	/*testimonail1 script code start here*/
	$('.testimonail1').owlCarousel({
		items: 1,
		itemsDesktop : [1199, 1],
		itemsDesktopSmall : [979, 1],
		itemsTablet : [768, 1],
		itemsMobile : [479, 1],
		navigation : false,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem : false,
		navigationText: ['<i class="fa fa-angle-left fa1"></i>', '<i class="fa fa-angle-right fa2"></i>'],
		pagination: true,
	});
	/*testimonail1 script code end here*/
	
	/*tweet script code start here*/
	$('#tweet').owlCarousel({
		items: 1,
		autoPlay: 5000,
		singleItem: true,
		navigation: true,
		navigationText: ['<i class="fa fa-angle-left fa1"></i>', '<i class="fa fa-angle-right fa2"></i>'],
		pagination: false,
	});
	/*tweet script code end here*/
	
	/*deal script code start here*/
	$('.deal').owlCarousel({
		items: 4,
		itemsDesktop : [1199, 3],
		itemsDesktopSmall : [979, 3],
		itemsTablet : [768, 2],
		itemsMobile : [479, 1],
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem : false,
		navigationText: ['<i class="fa fa-angle-left fa1"></i>', '<i class="fa fa-angle-right fa2"></i>'],
		pagination: false,
	});
	/*deal script code end here*/
	
	/*test script code start here*/
	$('.test').owlCarousel({
		items: 3,
		itemsDesktop : [1199, 3],
		itemsDesktopSmall : [979, 2],
		itemsTablet : [768, 2],
		itemsMobile : [479, 1],
		navigation : false,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem : false,
		navigationText: ['<i class="fa fa-angle-left fa1"></i>', '<i class="fa fa-angle-right fa2"></i>'],
		pagination: true,
	});
	/*text script code end here*/
	
	
	/*blogs script code start here*/
	$('.blogs').owlCarousel({
		items: 1,
		autoPlay: 5000,
		navigation : true,
		singleItem : true,
		navigationText: ['Prev', 'Next'],
		pagination: false,
	});
	/*blogs script code end here*/
	
	/*relate script code start here*/
	$('#related-pro').owlCarousel({
		items: 3,
		itemsDesktop : [1199, 3],
		itemsDesktopSmall : [979, 2],
		itemsTablet : [768, 2],
		itemsMobile : [479, 1],
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem : false,
		navigationText: ['Prev', 'Next'],
		pagination: false,
	});
	/*relate script code end here*/
	
	/*additional script code start here*/
	$('#additional').owlCarousel({
		items: 9,
		itemsDesktop : [1199, 3],
		itemsDesktopSmall : [979, 3],
		itemsTablet : [768, 2],
		itemsMobile : [479, 2],
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem : false,
		navigationText:['<i class="fa fa-angle-left fa1"></i>', '<i class="fa fa-angle-right fa2"></i>'],
		pagination: false,
	});
	/*additional script code end here*/


	// Product Grid
	$('#gridview').on('click',function(){
         $(this).addClass('active').siblings().removeClass('active');
		$('.shoppage .row > .product-list').attr('class', 'product-layout product-grid col-lg-3 col-md-3 col-sm-4 col-xs-12');
		localStorage.setItem('display', 'grid');
	});
	$('#listview').on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.shoppage .row > .product-grid').attr('class', 'product-layout product-list col-xs-12');
		localStorage.setItem('display', 'list');
	});

	// Product Grid
	$('#grid-view').on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.mainpage .row > .product-list').attr('class', 'product-layout product-grid col-lg-4 col-md-4 col-sm-6 col-xs-12');
		localStorage.setItem('display', 'grid');
	});
	$('#list-view').on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.mainpage .row > .product-grid').attr('class', 'product-layout product-list col-xs-12');
		localStorage.setItem('display', 'list');
	});
	
	//quantity code
	$(function () {
		$('.add').on('click',function(){
			var $qty=$(this).closest('p').find('.qty');
			var currentVal = parseInt($qty.val());
				$qty.val(currentVal + 1);
		});
		$('.minus').on('click',function(){
			var $qty=$(this).closest('p').find('.qty');
			var currentVal = parseInt($qty.val());
			$qty.val(currentVal - 1);					
		});
	});
	
	/*calender script code start here*/
	$('.date').datetimepicker({
		pickTime: false
	});
	/*calender script code end here*/

	//faq code start here
	$('.collapse').on('shown.bs.collapse', function(){
	$(this).parent().removeClass("active").addClass("active");
	$(this).parent().find(".fa-plus").removeClass("fa-plus").addClass("fa-minus");
	}).on('hidden.bs.collapse', function(){
	$(this).parent().find(".fa-minus").removeClass("fa-minus").addClass("fa-plus");
	$(this).parent().removeClass("active").addClass("");
	});

	//faq code end here
	
	// collapse
	$('.left-box .who .collapse').on('shown.bs.collapse', function(){
	$(this).parent().removeClass("active").addClass("active");
	$(this).parent().find(".fa-caret-right").removeClass("fa-caret-right").addClass("fa-caret-down");
	}).on('hidden.bs.collapse', function(){
	$(this).parent().find(".fa-caret-down").removeClass("fa-caret-down").addClass("fa-caret-right");
	$(this).parent().removeClass("active").addClass("");
	});


});
