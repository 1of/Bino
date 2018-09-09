// init controller
	var controller = new ScrollMagic.Controller();
	var controller2 = new ScrollMagic.Controller();

	// build scene
	var funcAnim = function() {
			var listToAnim = []; 
			listToAnim.push(document.getElementsByClassName("item_cofee")[0]);
			listToAnim.push(document.getElementsByClassName("item_watch")[0]);
			listToAnim.push(document.getElementsByClassName("item_car")[0]);
			listToAnim.push(document.getElementsByClassName("item_road")[0]);
			var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 960})
							.on("enter", function () {
								// trigger animation by changing inline style.
								listToAnim.forEach((i) => { 
									i.classList.remove("blur"); 
									i.style.filter = "blur(0px)";
								});
							})
							.on("leave", function () {
								// reset style
								listToAnim.forEach((i) => { 
									i.classList.add("blur");
									i.style.filter = "blur(1px)"; 
								});								
							}).addTo(controller);

		// build scene2
			var animateBtn = document.getElementsByClassName("anim-btn")[0];
			var animateBGcolor = document.getElementsByClassName("bg-black2")[0];
			var animatePromoTxt = document.getElementsByClassName("promo-text")[0];
			var animatePromoDesc = document.getElementsByClassName("promo-description")[0];
			
			var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 400})
							.on("enter", function () {
								// trigger animation by changing inline style.
								animateBtn.classList.remove("unvisible"); 
								animatePromoTxt.classList.remove("unvisible"); 
								animatePromoDesc.classList.remove("unvisible"); 
								animateBtn.classList.add("animated", "bounceInUp", "delay-4s", "slower");
								animatePromoTxt.classList.add("animated", "zoomIn", "slow");
								animatePromoDesc.classList.add("animated", "fadeInDown", "slower");
							})
							.on("leave", function () {

							}).addTo(controller2);

						}();

export default funcAnim;