//hamburger menu to X on click
document.querySelector("#nav-toggle").addEventListener("click", function(){
	this.classList.toggle("active");
});


//initialize fullPage.js
$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'lastPage'],
		menu: '#myMenu',
		navigation: true
	});
});

//rotate plus to x and display none / block on launch dates content
$(document).on('click','.button', function(e){
   e.preventDefault();
	$(this).toggleClass("rotate")
   	$(this).next('.info-expanded').toggle(400);
});





//initialize google maps js API
/*
function initMap(){
	let location = {
		lat: -28.037,
		lng: -147.354
	};

	let map = new google.maps.Map(document.getElementById("map"), {
		zoom: 3,
		center: location
	});

	let marker = new google.maps.Marker({
		position: location,
		icon: 'iss.png',
		map: map,
		title: 'International Space Station (ISS)'
	});
}
*/