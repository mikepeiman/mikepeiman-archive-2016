/*external js
http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js
*/

window.onload = function() {
  var red = document.getElementById("red"),
		    yellow = document.getElementById("yellow"),
		    green = document.getElementById("green"),
		    blue = document.getElementById("blue"),
		    pink = document.getElementById("pink"),
		    purple = document.getElementById("purple");
	
  //The last parameter with value of .25 is the stagger amount. Try changing it to 1 see how it impacts the animation.
  TweenMax.staggerTo([red, yellow, green, blue, pink, purple], 1,  {scale:0.2, opacity:0.3}, 0.25);			
}

//cmd-0 to restart