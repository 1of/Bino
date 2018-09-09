(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _scrollPageUp = require('./modules/scrollPageUp');

var _scrollPageUp2 = _interopRequireDefault(_scrollPageUp);

var _animation = require('./modules/animation');

var _animation2 = _interopRequireDefault(_animation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

(function ($) {
	'use strict';

	// When DOM is ready

	$(function () {
		// When the user scrolls down
		window.onscroll = function () {
			(0, _scrollPageUp2.default)();
		};

		// When the user clicks on the button, scroll to the top of the document	 
		document.getElementById("topBtn").onclick = function () {
			var top = $('li a').offset().top;
			$('body,html').animate({ scrollTop: top }, 1500);
		};

		// When the user clicks on menu item	 
		$('li a').on('click', function (event) {
			$('li a').removeClass('menu-active');
			$(this).addClass('menu-active');
		});

		$('.mobile-menu').on('click', function (event) {
			event.preventDefault();

			if ($('#nav-panel').hasClass('display-toggle')) {
				$('#nav-panel').removeClass('display-toggle');
			} else {
				$('#nav-panel').addClass('display-toggle');
			}
		});
	});
})(jQuery);

},{"./modules/animation":2,"./modules/scrollPageUp":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
// init controller
var controller = new ScrollMagic.Controller();
var controller2 = new ScrollMagic.Controller();

// build scene
var funcAnim = function () {
	var listToAnim = [];
	listToAnim.push(document.getElementsByClassName("item_cofee")[0]);
	listToAnim.push(document.getElementsByClassName("item_watch")[0]);
	listToAnim.push(document.getElementsByClassName("item_car")[0]);
	listToAnim.push(document.getElementsByClassName("item_road")[0]);
	var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", duration: 960 }).on("enter", function () {
		// trigger animation by changing inline style.
		listToAnim.forEach(function (i) {
			i.classList.remove("blur");
			i.style.filter = "blur(0px)";
		});
	}).on("leave", function () {
		// reset style
		listToAnim.forEach(function (i) {
			i.classList.add("blur");
			i.style.filter = "blur(1px)";
		});
	}).addTo(controller);

	// build scene2
	var animateBtn = document.getElementsByClassName("anim-btn")[0];
	var animateBGcolor = document.getElementsByClassName("bg-black2")[0];
	var animatePromoTxt = document.getElementsByClassName("promo-text")[0];
	var animatePromoDesc = document.getElementsByClassName("promo-description")[0];

	var scene2 = new ScrollMagic.Scene({ triggerElement: "#trigger2", duration: 400 }).on("enter", function () {
		// trigger animation by changing inline style.
		animateBtn.classList.remove("unvisible");
		animatePromoTxt.classList.remove("unvisible");
		animatePromoDesc.classList.remove("unvisible");
		animateBtn.classList.add("animated", "bounceInUp", "delay-4s", "slower");
		animatePromoTxt.classList.add("animated", "zoomIn", "slow");
		animatePromoDesc.classList.add("animated", "fadeInDown", "slower");
	}).on("leave", function () {}).addTo(controller2);
}();

exports.default = funcAnim;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

// When the user scrolls down 20px from the top of the document, show the button

var scrollFunc = function scrollFunction() {
    if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
};

exports.default = scrollFunc;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL21vZHVsZXMvYW5pbWF0aW9uLmpzIiwic3JjL2pzL21vZHVsZXMvc2Nyb2xsUGFnZVVwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNLQTs7OztBQUNBOzs7Ozs7QUFOQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQSxDQUFFLFVBQUMsQ0FBRCxFQUFPO0FBQ1A7O0FBRUE7O0FBQ0EsR0FBRSxZQUFNO0FBQ1Q7QUFDQSxTQUFPLFFBQVAsR0FBa0IsWUFBVztBQUM1QjtBQUNBLEdBRkQ7O0FBSUE7QUFDQSxXQUFTLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0MsT0FBbEMsR0FBNEMsWUFBVztBQUNsRCxPQUFJLE1BQU0sRUFBRSxNQUFGLEVBQVUsTUFBVixHQUFtQixHQUE3QjtBQUNBLEtBQUUsV0FBRixFQUFlLE9BQWYsQ0FBdUIsRUFBQyxXQUFXLEdBQVosRUFBdkIsRUFBeUMsSUFBekM7QUFDSixHQUhEOztBQUtHO0FBQ0YsSUFBRSxNQUFGLEVBQVUsRUFBVixDQUFhLE9BQWIsRUFBc0IsVUFBUyxLQUFULEVBQWU7QUFDdEMsS0FBRSxNQUFGLEVBQVUsV0FBVixDQUFzQixhQUF0QjtBQUNBLEtBQUUsSUFBRixFQUFRLFFBQVIsQ0FBaUIsYUFBakI7QUFDRSxHQUhEOztBQUtGLElBQUUsY0FBRixFQUFrQixFQUFsQixDQUFxQixPQUFyQixFQUE4QixVQUFTLEtBQVQsRUFBZ0I7QUFDN0MsU0FBTSxjQUFOOztBQUVDLE9BQUssRUFBRSxZQUFGLEVBQWdCLFFBQWhCLENBQXlCLGdCQUF6QixDQUFMLEVBQWtEO0FBQ2xELE1BQUUsWUFBRixFQUFnQixXQUFoQixDQUE0QixnQkFBNUI7QUFDRyxJQUZILE1BRVM7QUFDTixNQUFFLFlBQUYsRUFBZ0IsUUFBaEIsQ0FBeUIsZ0JBQXpCO0FBQ0E7QUFFSixHQVREO0FBV0csRUE3QkQ7QUErQkQs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QXdDLE9BQXhDLEdBQWtELE9BQWxEO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsaUJBQVMsY0FBVCxDQUF3QixRQUF4QixFQUFrQyxLQUFsQyxDQUF3QyxPQUF4QyxHQUFrRCxNQUFsRDtBQUNIO0FBQ0osQ0FORDs7a0JBUWUsVSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIFlvdSBjYW4gd3JpdGUgYSBjYWxsIGFuZCBpbXBvcnQgeW91ciBmdW5jdGlvbnMgaW4gdGhpcyBmaWxlLlxuLy9cbi8vIFRoaXMgZmlsZSB3aWxsIGJlIGNvbXBpbGVkIGludG8gYXBwLmpzIGFuZCB3aWxsIG5vdCBiZSBtaW5pZmllZC5cbi8vIEZlZWwgZnJlZSB3aXRoIHVzaW5nIEVTNiBoZXJlLlxuXG5pbXBvcnQgc2Nyb2xsRnVuYyBmcm9tICcuL21vZHVsZXMvc2Nyb2xsUGFnZVVwJztcbmltcG9ydCBmdW5jQW5pbSBmcm9tICcuL21vZHVsZXMvYW5pbWF0aW9uJztcblxuXG4oICgkKSA9PiB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBXaGVuIERPTSBpcyByZWFkeVxuICAkKCgpID0+IHtcblx0Ly8gV2hlbiB0aGUgdXNlciBzY3JvbGxzIGRvd25cblx0d2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24oKSB7IFxuXHRcdHNjcm9sbEZ1bmMoKTtcblx0fTtcblxuXHQvLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgYnV0dG9uLCBzY3JvbGwgdG8gdGhlIHRvcCBvZiB0aGUgZG9jdW1lbnRcdCBcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3BCdG5cIikub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHRvcCA9ICQoJ2xpIGEnKS5vZmZzZXQoKS50b3A7XG4gICAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6IHRvcH0sIDE1MDApO1xuXHR9O1xuXG4gICAgLy8gV2hlbiB0aGUgdXNlciBjbGlja3Mgb24gbWVudSBpdGVtXHQgXG4gICQoJ2xpIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCl7XG5cdCQoJ2xpIGEnKS5yZW1vdmVDbGFzcygnbWVudS1hY3RpdmUnKTtcblx0JCh0aGlzKS5hZGRDbGFzcygnbWVudS1hY3RpdmUnKTtcbiAgfSk7XG5cbiQoJy5tb2JpbGUtbWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFxuXHQgaWYgKCAkKCcjbmF2LXBhbmVsJykuaGFzQ2xhc3MoJ2Rpc3BsYXktdG9nZ2xlJykgKSB7XG5cdFx0JCgnI25hdi1wYW5lbCcpLnJlbW92ZUNsYXNzKCdkaXNwbGF5LXRvZ2dsZScpO1xuICAgIH0gZWxzZSB7XG5cdCAgICAkKCcjbmF2LXBhbmVsJykuYWRkQ2xhc3MoJ2Rpc3BsYXktdG9nZ2xlJyk7XG4gICAgfVxuXG59KTtcblxuICB9KTtcblxufSkoalF1ZXJ5KTtcbiIsIi8vIGluaXQgY29udHJvbGxlclxyXG5cdHZhciBjb250cm9sbGVyID0gbmV3IFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIoKTtcclxuXHR2YXIgY29udHJvbGxlcjIgPSBuZXcgU2Nyb2xsTWFnaWMuQ29udHJvbGxlcigpO1xyXG5cclxuXHQvLyBidWlsZCBzY2VuZVxyXG5cdHZhciBmdW5jQW5pbSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgbGlzdFRvQW5pbSA9IFtdOyBcclxuXHRcdFx0bGlzdFRvQW5pbS5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpdGVtX2NvZmVlXCIpWzBdKTtcclxuXHRcdFx0bGlzdFRvQW5pbS5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpdGVtX3dhdGNoXCIpWzBdKTtcclxuXHRcdFx0bGlzdFRvQW5pbS5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpdGVtX2NhclwiKVswXSk7XHJcblx0XHRcdGxpc3RUb0FuaW0ucHVzaChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaXRlbV9yb2FkXCIpWzBdKTtcclxuXHRcdFx0dmFyIHNjZW5lID0gbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHt0cmlnZ2VyRWxlbWVudDogXCIjdHJpZ2dlcjFcIiwgZHVyYXRpb246IDk2MH0pXHJcblx0XHRcdFx0XHRcdFx0Lm9uKFwiZW50ZXJcIiwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gdHJpZ2dlciBhbmltYXRpb24gYnkgY2hhbmdpbmcgaW5saW5lIHN0eWxlLlxyXG5cdFx0XHRcdFx0XHRcdFx0bGlzdFRvQW5pbS5mb3JFYWNoKChpKSA9PiB7IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpLmNsYXNzTGlzdC5yZW1vdmUoXCJibHVyXCIpOyBcclxuXHRcdFx0XHRcdFx0XHRcdFx0aS5zdHlsZS5maWx0ZXIgPSBcImJsdXIoMHB4KVwiO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHQub24oXCJsZWF2ZVwiLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyByZXNldCBzdHlsZVxyXG5cdFx0XHRcdFx0XHRcdFx0bGlzdFRvQW5pbS5mb3JFYWNoKChpKSA9PiB7IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpLmNsYXNzTGlzdC5hZGQoXCJibHVyXCIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpLnN0eWxlLmZpbHRlciA9IFwiYmx1cigxcHgpXCI7IFxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdH0pLmFkZFRvKGNvbnRyb2xsZXIpO1xyXG5cclxuXHRcdC8vIGJ1aWxkIHNjZW5lMlxyXG5cdFx0XHR2YXIgYW5pbWF0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhbmltLWJ0blwiKVswXTtcclxuXHRcdFx0dmFyIGFuaW1hdGVCR2NvbG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJnLWJsYWNrMlwiKVswXTtcclxuXHRcdFx0dmFyIGFuaW1hdGVQcm9tb1R4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9tby10ZXh0XCIpWzBdO1xyXG5cdFx0XHR2YXIgYW5pbWF0ZVByb21vRGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9tby1kZXNjcmlwdGlvblwiKVswXTtcclxuXHRcdFx0XHJcblx0XHRcdHZhciBzY2VuZTIgPSBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe3RyaWdnZXJFbGVtZW50OiBcIiN0cmlnZ2VyMlwiLCBkdXJhdGlvbjogNDAwfSlcclxuXHRcdFx0XHRcdFx0XHQub24oXCJlbnRlclwiLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyB0cmlnZ2VyIGFuaW1hdGlvbiBieSBjaGFuZ2luZyBpbmxpbmUgc3R5bGUuXHJcblx0XHRcdFx0XHRcdFx0XHRhbmltYXRlQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJ1bnZpc2libGVcIik7IFxyXG5cdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZVByb21vVHh0LmNsYXNzTGlzdC5yZW1vdmUoXCJ1bnZpc2libGVcIik7IFxyXG5cdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZVByb21vRGVzYy5jbGFzc0xpc3QucmVtb3ZlKFwidW52aXNpYmxlXCIpOyBcclxuXHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVCdG4uY2xhc3NMaXN0LmFkZChcImFuaW1hdGVkXCIsIFwiYm91bmNlSW5VcFwiLCBcImRlbGF5LTRzXCIsIFwic2xvd2VyXCIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZVByb21vVHh0LmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlZFwiLCBcInpvb21JblwiLCBcInNsb3dcIik7XHJcblx0XHRcdFx0XHRcdFx0XHRhbmltYXRlUHJvbW9EZXNjLmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlZFwiLCBcImZhZGVJbkRvd25cIiwgXCJzbG93ZXJcIik7XHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHQub24oXCJsZWF2ZVwiLCBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdH0pLmFkZFRvKGNvbnRyb2xsZXIyKTtcclxuXHJcblx0XHRcdFx0XHRcdH0oKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmNBbmltOyIsIlxyXG4vLyBXaGVuIHRoZSB1c2VyIHNjcm9sbHMgZG93biAyMHB4IGZyb20gdGhlIHRvcCBvZiB0aGUgZG9jdW1lbnQsIHNob3cgdGhlIGJ1dHRvblxyXG5cclxudmFyIHNjcm9sbEZ1bmMgPSBmdW5jdGlvbiBzY3JvbGxGdW5jdGlvbigpIHtcclxuICAgIGlmIChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA+IDU1MCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gNTUwKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3BCdG5cIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3BCdG5cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2Nyb2xsRnVuYztcclxuIl19
