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
		$("#topBtn").on('click', function () {
			var top = $('li a').offset().top;
			$('body,html').animate({ scrollTop: top }, 1500);
		});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL21vZHVsZXMvYW5pbWF0aW9uLmpzIiwic3JjL2pzL21vZHVsZXMvc2Nyb2xsUGFnZVVwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNLQTs7OztBQUNBOzs7Ozs7QUFOQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQSxDQUFFLFVBQUMsQ0FBRCxFQUFPO0FBQ1A7O0FBRUE7O0FBQ0EsR0FBRSxZQUFNO0FBQ1Q7QUFDQSxTQUFPLFFBQVAsR0FBa0IsWUFBVztBQUM1QjtBQUNBLEdBRkQ7O0FBSUE7QUFDQSxJQUFFLFNBQUYsRUFBYSxFQUFiLENBQWdCLE9BQWhCLEVBQXlCLFlBQVc7QUFDL0IsT0FBSSxNQUFNLEVBQUUsTUFBRixFQUFVLE1BQVYsR0FBbUIsR0FBN0I7QUFDQSxLQUFFLFdBQUYsRUFBZSxPQUFmLENBQXVCLEVBQUMsV0FBVyxHQUFaLEVBQXZCLEVBQXlDLElBQXpDO0FBQ0osR0FIRDs7QUFLRztBQUNGLElBQUUsTUFBRixFQUFVLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLFVBQVMsS0FBVCxFQUFlO0FBQ3RDLEtBQUUsTUFBRixFQUFVLFdBQVYsQ0FBc0IsYUFBdEI7QUFDQSxLQUFFLElBQUYsRUFBUSxRQUFSLENBQWlCLGFBQWpCO0FBQ0UsR0FIRDs7QUFLRixJQUFFLGNBQUYsRUFBa0IsRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsVUFBUyxLQUFULEVBQWdCO0FBQzdDLFNBQU0sY0FBTjs7QUFFQyxPQUFLLEVBQUUsWUFBRixFQUFnQixRQUFoQixDQUF5QixnQkFBekIsQ0FBTCxFQUFrRDtBQUNsRCxNQUFFLFlBQUYsRUFBZ0IsV0FBaEIsQ0FBNEIsZ0JBQTVCO0FBQ0csSUFGSCxNQUVTO0FBQ04sTUFBRSxZQUFGLEVBQWdCLFFBQWhCLENBQXlCLGdCQUF6QjtBQUNBO0FBRUosR0FURDtBQVdHLEVBN0JEO0FBK0JELENB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QyxPQUF4QyxHQUFrRCxPQUFsRDtBQUNILEtBRkQsTUFFTztBQUNILGlCQUFTLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0MsS0FBbEMsQ0FBd0MsT0FBeEMsR0FBa0QsTUFBbEQ7QUFDSDtBQUNKLENBTkQ7O2tCQVFlLFUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBZb3UgY2FuIHdyaXRlIGEgY2FsbCBhbmQgaW1wb3J0IHlvdXIgZnVuY3Rpb25zIGluIHRoaXMgZmlsZS5cbi8vXG4vLyBUaGlzIGZpbGUgd2lsbCBiZSBjb21waWxlZCBpbnRvIGFwcC5qcyBhbmQgd2lsbCBub3QgYmUgbWluaWZpZWQuXG4vLyBGZWVsIGZyZWUgd2l0aCB1c2luZyBFUzYgaGVyZS5cblxuaW1wb3J0IHNjcm9sbEZ1bmMgZnJvbSAnLi9tb2R1bGVzL3Njcm9sbFBhZ2VVcCc7XG5pbXBvcnQgZnVuY0FuaW0gZnJvbSAnLi9tb2R1bGVzL2FuaW1hdGlvbic7XG5cblxuKCAoJCkgPT4ge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gV2hlbiBET00gaXMgcmVhZHlcbiAgJCgoKSA9PiB7XG5cdC8vIFdoZW4gdGhlIHVzZXIgc2Nyb2xscyBkb3duXG5cdHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uKCkgeyBcblx0XHRzY3JvbGxGdW5jKCk7XG5cdH07XG5cblx0Ly8gV2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIGJ1dHRvbiwgc2Nyb2xsIHRvIHRoZSB0b3Agb2YgdGhlIGRvY3VtZW50XHQgXG5cdCQoXCIjdG9wQnRuXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHRvcCA9ICQoJ2xpIGEnKS5vZmZzZXQoKS50b3A7XG4gICAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6IHRvcH0sIDE1MDApO1xuXHR9KTtcblxuICAgIC8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIG1lbnUgaXRlbVx0IFxuICAkKCdsaSBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuXHQkKCdsaSBhJykucmVtb3ZlQ2xhc3MoJ21lbnUtYWN0aXZlJyk7XG5cdCQodGhpcykuYWRkQ2xhc3MoJ21lbnUtYWN0aXZlJyk7XG4gIH0pO1xuXG4kKCcubW9iaWxlLW1lbnUnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcblx0IGlmICggJCgnI25hdi1wYW5lbCcpLmhhc0NsYXNzKCdkaXNwbGF5LXRvZ2dsZScpICkge1xuXHRcdCQoJyNuYXYtcGFuZWwnKS5yZW1vdmVDbGFzcygnZGlzcGxheS10b2dnbGUnKTtcbiAgICB9IGVsc2Uge1xuXHQgICAgJCgnI25hdi1wYW5lbCcpLmFkZENsYXNzKCdkaXNwbGF5LXRvZ2dsZScpO1xuICAgIH1cblxufSk7XG5cbiAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iLCIvLyBpbml0IGNvbnRyb2xsZXJcclxuXHR2YXIgY29udHJvbGxlciA9IG5ldyBTY3JvbGxNYWdpYy5Db250cm9sbGVyKCk7XHJcblx0dmFyIGNvbnRyb2xsZXIyID0gbmV3IFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIoKTtcclxuXHJcblx0Ly8gYnVpbGQgc2NlbmVcclxuXHR2YXIgZnVuY0FuaW0gPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIGxpc3RUb0FuaW0gPSBbXTsgXHJcblx0XHRcdGxpc3RUb0FuaW0ucHVzaChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaXRlbV9jb2ZlZVwiKVswXSk7XHJcblx0XHRcdGxpc3RUb0FuaW0ucHVzaChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaXRlbV93YXRjaFwiKVswXSk7XHJcblx0XHRcdGxpc3RUb0FuaW0ucHVzaChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaXRlbV9jYXJcIilbMF0pO1xyXG5cdFx0XHRsaXN0VG9BbmltLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIml0ZW1fcm9hZFwiKVswXSk7XHJcblx0XHRcdHZhciBzY2VuZSA9IG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7dHJpZ2dlckVsZW1lbnQ6IFwiI3RyaWdnZXIxXCIsIGR1cmF0aW9uOiA5NjB9KVxyXG5cdFx0XHRcdFx0XHRcdC5vbihcImVudGVyXCIsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0XHRcdC8vIHRyaWdnZXIgYW5pbWF0aW9uIGJ5IGNoYW5naW5nIGlubGluZSBzdHlsZS5cclxuXHRcdFx0XHRcdFx0XHRcdGxpc3RUb0FuaW0uZm9yRWFjaCgoaSkgPT4geyBcclxuXHRcdFx0XHRcdFx0XHRcdFx0aS5jbGFzc0xpc3QucmVtb3ZlKFwiYmx1clwiKTsgXHJcblx0XHRcdFx0XHRcdFx0XHRcdGkuc3R5bGUuZmlsdGVyID0gXCJibHVyKDBweClcIjtcclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0Lm9uKFwibGVhdmVcIiwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gcmVzZXQgc3R5bGVcclxuXHRcdFx0XHRcdFx0XHRcdGxpc3RUb0FuaW0uZm9yRWFjaCgoaSkgPT4geyBcclxuXHRcdFx0XHRcdFx0XHRcdFx0aS5jbGFzc0xpc3QuYWRkKFwiYmx1clwiKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aS5zdHlsZS5maWx0ZXIgPSBcImJsdXIoMXB4KVwiOyBcclxuXHRcdFx0XHRcdFx0XHRcdH0pO1x0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR9KS5hZGRUbyhjb250cm9sbGVyKTtcclxuXHJcblx0XHQvLyBidWlsZCBzY2VuZTJcclxuXHRcdFx0dmFyIGFuaW1hdGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYW5pbS1idG5cIilbMF07XHJcblx0XHRcdHZhciBhbmltYXRlQkdjb2xvciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJiZy1ibGFjazJcIilbMF07XHJcblx0XHRcdHZhciBhbmltYXRlUHJvbW9UeHQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvbW8tdGV4dFwiKVswXTtcclxuXHRcdFx0dmFyIGFuaW1hdGVQcm9tb0Rlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvbW8tZGVzY3JpcHRpb25cIilbMF07XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgc2NlbmUyID0gbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHt0cmlnZ2VyRWxlbWVudDogXCIjdHJpZ2dlcjJcIiwgZHVyYXRpb246IDQwMH0pXHJcblx0XHRcdFx0XHRcdFx0Lm9uKFwiZW50ZXJcIiwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gdHJpZ2dlciBhbmltYXRpb24gYnkgY2hhbmdpbmcgaW5saW5lIHN0eWxlLlxyXG5cdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwidW52aXNpYmxlXCIpOyBcclxuXHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVQcm9tb1R4dC5jbGFzc0xpc3QucmVtb3ZlKFwidW52aXNpYmxlXCIpOyBcclxuXHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVQcm9tb0Rlc2MuY2xhc3NMaXN0LnJlbW92ZShcInVudmlzaWJsZVwiKTsgXHJcblx0XHRcdFx0XHRcdFx0XHRhbmltYXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlZFwiLCBcImJvdW5jZUluVXBcIiwgXCJkZWxheS00c1wiLCBcInNsb3dlclwiKTtcclxuXHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVQcm9tb1R4dC5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0ZWRcIiwgXCJ6b29tSW5cIiwgXCJzbG93XCIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZVByb21vRGVzYy5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0ZWRcIiwgXCJmYWRlSW5Eb3duXCIsIFwic2xvd2VyXCIpO1xyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0Lm9uKFwibGVhdmVcIiwgZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHR9KS5hZGRUbyhjb250cm9sbGVyMik7XHJcblxyXG5cdFx0XHRcdFx0XHR9KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jQW5pbTsiLCJcclxuLy8gV2hlbiB0aGUgdXNlciBzY3JvbGxzIGRvd24gMjBweCBmcm9tIHRoZSB0b3Agb2YgdGhlIGRvY3VtZW50LCBzaG93IHRoZSBidXR0b25cclxuXHJcbnZhciBzY3JvbGxGdW5jID0gZnVuY3Rpb24gc2Nyb2xsRnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPiA1NTAgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA+IDU1MCkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9wQnRuXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9wQnRuXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNjcm9sbEZ1bmM7XHJcbiJdfQ==
