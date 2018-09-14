// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import scrollFunc from './modules/scrollPageUp';
import funcAnim from './modules/animation';


( ($) => {
  'use strict';

  // When DOM is ready
  $(() => {
	// When the user scrolls down
	window.onscroll = function() { 
		scrollFunc();
	};

	// When the user clicks on the button, scroll to the top of the document	 
	$("#topBtn").on('click', function() {
      var top = $('li a').offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
	});

    // When the user clicks on menu item	 
  $('li a').on('click', function(event){
	$('li a').removeClass('menu-active');
	$(this).addClass('menu-active');
  });

$('.mobile-menu').on('click', function(event) {
	event.preventDefault();
	
	 if ( $('#nav-panel').hasClass('display-toggle') ) {
		$('#nav-panel').removeClass('display-toggle');
    } else {
	    $('#nav-panel').addClass('display-toggle');
    }

});

  });

})(jQuery);
