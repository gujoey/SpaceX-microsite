//hamburger to X on click
document.querySelector("#nav-toggle").addEventListener("click", function(){
	this.classList.toggle("active");
});


//initializes fullPage.js
$(document).ready(function() {
	$('#fullpage').fullpage();
});


$('#fullpage').fullpage({
	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
	menu: '#myMenu',
	navigation: true
});