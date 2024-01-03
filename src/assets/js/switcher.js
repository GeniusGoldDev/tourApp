
// cookie functions http://www.quirksmode.org/js/cookies.html
function createCookie(name,value,days)
{
	
	if (days)
	{
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}
function readCookie(name)
{
	
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++)
	{
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}
function eraseCookie(name)
{
	
	createCookie(name,"",-1);
}

		

$('.fb').hide();
$('.facebook').on('click', function(){
    $('.fb').show();
	$('.tw').hide();
	$('.go').hide();
	$('.inst').hide();
	$('.pint').hide();
});
$('.tw').hide();
$('.twitter').on('click', function(){
    $('.tw').show();
	$('.go').hide();
	$('.fb').hide();
	$('.inst').hide();
	$('.pint').hide();
});
$('.go').hide();
$('.google').on('click', function(){
    $('.go').show();
	$('.fb').hide();
	$('.tw').hide();
	$('.inst').hide();
	$('.pint').hide();
});
$('.inst').hide();
$('.instagram').on('click', function(){
    $('.inst').show();
	$('.fb').hide();
	$('.tw').hide();
	$('.go').hide();
	$('.pint').hide();
});
$('.pint').hide();
$('.pinterest').on('click', function(){
    $('.pint').show();
	$('.fb').hide();
	$('.tw').hide();
	$('.go').hide();
	$('.inst').hide();
});
$('.fb .fa-facebook').on('click', function(){
    $('.fb').hide();
	$('.tw').hide();
	$('.pint').hide();
	$('.go').hide();
	$('.inst').hide();
});
$('.tw .fa-twitter').on('click', function(){
    $('.fb').hide();
	$('.tw').hide();
	$('.pint').hide();
	$('.go').hide();
	$('.inst').hide();
});
$('.pint .fa-pinterest-p').on('click', function(){
    $('.fb').hide();
	$('.tw').hide();
	$('.pint').hide();
	$('.go').hide();
	$('.inst').hide();
});
$('.go .fa-google-plus').on('click', function(){
    $('.fb').hide();
	$('.tw').hide();
	$('.pint').hide();
	$('.go').hide();
	$('.inst').hide();
});
$('.inst .fa-instagram').on('click', function(){
    $('.fb').hide();
	$('.tw').hide();
	$('.pint').hide();
	$('.go').hide();
	$('.inst').hide();
});

// /cookie functions
