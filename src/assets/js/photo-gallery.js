$(document).ready(function(){   
	$('.product-thumb .image').on('click',function(){
		var src = $('img', this).attr('src'); 
		var img = '<img src="' + src + '" class="img-responsive"/>';
		
		//start of new code new code
		var index = $(this).parent('.image').index();   
		
		var html = '';
		html += img;                                
		html += '<div style="clear:both;display:block;">';
		html += '<a class="controls previous" href="' + (index) + '"><i class="fa fa-chevron-left" aria-hidden="true"></i></a>';
		html += '<a class="controls next" href="'+ (index+2) + '"><i class="fa fa-chevron-right" aria-hidden="true"></i></a>';
		html += '</div>';
		
		$('#myModal').modal();
		$('#myModal').on('shown.bs.modal', function(){
			$('#myModal .modal-body').html(html);
			//new code
			$('a.controls').trigger('click');
		})
		$('#myModal').on('hidden.bs.modal', function(){
			$('#myModal .modal-body').html('');
		});
		
		
		
		
   });	
})
        
         
$(document).on('click', 'a.controls', function(){
	var index = $(this).attr('href');
	var src = $('.padd0:nth-child('+ index +') img').attr('src');             
	
	$('.modal-body img').attr('src', src);
	
	var newPrevIndex = parseInt(index) - 1; 
	var newNextIndex = parseInt(newPrevIndex) + 2; 
	
	if($(this).hasClass('previous')){               
		$(this).attr('href', newPrevIndex); 
		$('a.next').attr('href', newNextIndex);
	}else{
		$(this).attr('href', newNextIndex); 
		$('a.previous').attr('href', newPrevIndex);
	}
	
	var total = $('.padd0').length + 1; 
	//hide next button
	
	
	
	return false;
});

