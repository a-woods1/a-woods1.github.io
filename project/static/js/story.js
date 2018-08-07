// Code to show different things people are weighing on whether or not to disclose

var affirmations = ["If a person's disability is visible to others, they may have to disclose, while people with less visible" +
" disabilities do not have to do so", 
"If a person's disability prevents them from completing an essential task, they may have to disclose in order to move forward" +
" with the hiring process", 
"If a person feels a certain level of trust in the company or employer, they may be more likely to disclose", 
"Some people may feel that their disability is an important part of their identity, while others may not, which can affect how and when they disclose", 
"People who have grown up under the protections of the ADA may be more likely to disclose, versus those who have not always had this type of legal protection"]


$(document).on('click','.ball-solid',function(){
        var itemID = $(this).attr('id')
        $(".empty-text").text(affirmations[itemID]);
    });



// Trigger CSS animations on scroll.
// Detailed explanation can be found at http://www.bram.us/2013/11/20/scroll-animations/

// Looking for a version that also reverses the animation when
// elements scroll below the fold again?
// --> Check https://codepen.io/bramus/pen/vKpjNP

jQuery(function($) {

  $('#email-submit-btn').on('click', function(){
    /*$('#responses').toggleClass('hidden');*/
    $('#responses').removeAttr("hidden")
  });


  $('#stop-animation-btn').on('click', function(){
      var currentText = $('#stop-animation-btn').text();
  
      console.log(currentText);
      if (currentText == "Pause Animations on this Page"){
        $(this).text("Start Animations on this Page")
      } else {
        $(this).text("Pause Animations on this Page")
      }


      $('#ball1').toggleClass('paused');
      $('#ball2').toggleClass('paused');
      $('#pivot').toggleClass('paused');
      $('#board').toggleClass('paused');
      $('.ui_box__inner2').toggleClass('fadeInDown');
      $('.animatable').toggleClass('fadeInDown'); 

  });



  $('#slider1').on('change', function(){
    var valueOn = $("#range1" ).val();    
    if (valueOn >= 50){
    $('#rangevalue').text("Disclose");
    $('#rangevalue').removeClass("disclose-false");    
    $('#rangevalue').addClass("disclose-true");
      } else {
      $('#rangevalue').text("Don't Disclose");
      $('#rangevalue').removeClass("disclose-true");    
      $('#rangevalue').addClass("disclose-false");
    }
  });


  $('#slider2').on('change', function(){
    var valueOn2 = $("#range2" ).val(); 
    console.log(valueOn2);   
    if (valueOn2 >= 50){
          console.log("Hey");
    $('#rangevalue2').text("Disclose");
    $('#rangevalue2').removeClass("disclose-false");    
    $('#rangevalue2').addClass("disclose-true");
      } else {
      $('#rangevalue2').text("Don't Disclose");
      $('#rangevalue2').removeClass("disclose-true");    
      $('#rangevalue2').addClass("disclose-false");
    }
  });


  $('#slider3').on('change', function(){
    var valueOn3 = $("#range3" ).val(); 
    console.log(valueOn3);   
    if (valueOn3 >= 50){
    $('#rangevalue3').text("Disclose");
    $('#rangevalue3').removeClass("disclose-false");    
    $('#rangevalue3').addClass("disclose-true");
      } else {
      $('#rangevalue3').text("Don't Disclose");
      $('#rangevalue3').removeClass("disclose-true");    
      $('#rangevalue3').addClass("disclose-false");
    }
  });

  $('#slider4').on('change', function(){
    var valueOn4 = $("#range4" ).val(); 
    console.log(valueOn4);   
    if (valueOn4 >= 50){
    $('#rangevalue4').text("Disclose");
    $('#rangevalue4').removeClass("disclose-false");    
    $('#rangevalue4').addClass("disclose-true");      
      } else {
      $('#rangevalue4').text("Don't Disclose");
      $('#rangevalue4').removeClass("disclose-true");    
      $('#rangevalue4').addClass("disclose-false");        
    }
  });

  $('#slider5').on('change', function(){
    var valueOn5 = $("#range5" ).val(); 
    console.log(valueOn5);   
    if (valueOn5 >= 50){
    $('#rangevalue5').text("Disclose");
    $('#rangevalue5').removeClass("disclose-false");    
    $('#rangevalue5').addClass("disclose-true");
      } else {
      $('#rangevalue5').text("Don't Disclose");
      $('#rangevalue5').removeClass("disclose-true");    
      $('#rangevalue5').addClass("disclose-false");         
    }
  });


  
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {
    
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');
    
    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }
    
    // Check all animatables and animate them if necessary
		$animatables.each(function(i) {
       var $animatable = $(this);
			if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
			}
    });

	};
  
  // Hook doAnimations on scroll, and trigger a scroll
	$(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});



