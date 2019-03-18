$(document).ready(function(){
    /*easy selectors*/
    $('p').css('border-bottom', '1px solid black')
    $('.first').css('border-color','red')
    $('#special').css('background-color','#ffcc00')
    $('p.first small').css('background-color','lightgrey')


/*

content-text, html and input

*/
$('.first').html('lets learn Jquery')
$('.first').prepend('<h2>Welcome</h2>')
$('.first').after('<small>make webpages interactive</small>')
$('#yourName').val('Bob Builder')
/**
 * attribute selector
 */

 $('a[href="#1"]').css('background-color','tomato')
 $('a[href^="#"]').css('color','grey')
 $('a[href*="google"]').css('font-weight', 'bold')

 /**
  * animation
  *  */
//  $('.card:first').delay(1000).hide(400).show(800, function (){ alert('we\'re back')}).css('background-color','tomato')
 $('.card').animate({borderRadius:'20px',}, 400) 

/*
*atribute method 
*/

 $('img:first').attr('src','./img/image-5.jpg')

 /**
  * class method
 */
// $('img:first').hasClass('special')
// $('img').addClass('special')
$('img').toggleClass('special')

})