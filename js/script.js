
//initialize fullPage.js
$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
		menu: '#myMenu',
		navigation: false,
		scrollOverflow: true,
		slidesNavigation: true
	});
});

//hamburger menu to X on click
document.querySelector("#nav-toggle").addEventListener("click", function(){
	this.classList.toggle("active");
	$("#collapsedNavbar").toggle(500);
	
});


//rotate plus to x and display none / block on launch dates content
$(document).on('click','.button', function(e){
   	e.preventDefault();
	$(this).toggleClass("rotate");
   	$(this).next('.info-expanded').toggle(400);
});


//dynamicly set active navigation based on changing url
$(window).on('hashchange', function(e){
	let url, id, regEx;

	regEx = /^\w+\/\d{1}$/
	url = window.location.href;
	id = url.substring(url.lastIndexOf('#') + 1);

	if (regEx.test(id)){
		let newId = id.slice(0, -2);
		if (newId === "secondPage"){
			setActive('#pageTwo');
		}
		if (newId === "thirdPage"){
			setActive('#pageThree');
		}
		if (newId === "fourthPage"){
			setActive('#pageFour');
		}

	}else{
		if (id === "firstPage"){
			setActive('#pageOne');
		}
		if (id === "secondPage"){
			setActive('#pageTwo');
		}
		if (id === "thirdPage"){
			setActive('#pageThree');
		}
		if (id === "fourthPage"){
			setActive('#pageFour');
		}
		if (id === "lastPage"){
			setActive('#pageFive');
		}
	}
});

function setActive(active){
	$('li.nav-item.active').attr('class', 'nav-item');
	$(active).attr('class', 'nav-item active underlined')
}


//Fetch rocket data from API
document.getElementById("fhInfoButton").addEventListener("click", function(){
	fetch('https://api.spacexdata.com/v2/rockets')
		.then(result => result.json())
		.then((res) => {
			falconHeavyInfo(res);
		})
		.catch(err => console.log(err))
});


//falcon heavy API > DOM
function falconHeavyInfo(result){
	let modalBody, pActive, active, pCostLaunch, costLaunch, pDiameter, diameter;
	let pFirstFlight, firstFlight, mass, pMass, payloadLEO, pPayloadLEO;
	let payloadMars, pPayloadMars, successRate, pSuccessRate;
	
	//active
	modalBody = document.getElementById("fhModalBody");
	modalBody.innerHTML = "";
	
	if (result[2].active){
		active = document.createTextNode("Active: " + "Yes");
	}else{
		active = document.createTextNode("Active: " + "No");
	}
	pActive = document.createElement("p");
	pActive.appendChild(active);
	modalBody.appendChild(pActive);
	
	//cost per launch
	costLaunch = document.createTextNode("Cost per launch: $" + result[2].cost_per_launch);
	pCostLaunch = document.createElement("p");
	pCostLaunch.appendChild(costLaunch);
	modalBody.appendChild(pCostLaunch);
	
	//diamters
	diameter = document.createTextNode("Diameter: " + result[2].diameter.meters + " meters");
	pDiameter = document.createElement("p");
	pDiameter.appendChild(diameter);
	modalBody.appendChild(pDiameter);
	
	//first flight
	firstFlight = document.createTextNode("First flight: " + result[2].first_flight);
	pFirstFlight = document.createElement("p");
	pFirstFlight.appendChild(firstFlight);
	modalBody.appendChild(pFirstFlight);
	
	//Weight
	mass = document.createTextNode("Weight: " + result[2].mass.kg + " kg");
	pMass = document.createElement("p");
	pMass.appendChild(mass);
	modalBody.appendChild(pMass);
	
	//payload to low earth orbit
	payloadLEO = document.createTextNode("Payload to Low Earth Orbit: " + result[2].payload_weights[0].kg + "kg");
	pPayloadLEO = document.createElement("p");
	pPayloadLEO.appendChild(payloadLEO);
	modalBody.appendChild(pPayloadLEO);
	
	//payload to mars
	payloadMars = document.createTextNode("Payload to mars: " + result[2].payload_weights[2].kg + "kg");
	pPayloadMars = document.createElement("p");
	pPayloadMars.appendChild(payloadMars);
	modalBody.appendChild(pPayloadMars);
	
	//success rate
	successRate = document.createTextNode("Success rate: " + result[2].success_rate_pct + "%");
	pSuccessRate = document.createElement("p");
	pSuccessRate.appendChild(successRate);
	modalBody.appendChild(pSuccessRate);
	
	console.log(result);
}


//fetch rocket data from API
document.getElementById("bfrInfoButton").addEventListener("click", function(){
	fetch('https://api.spacexdata.com/v2/rockets')
		.then(result => result.json())
		.then((res) => {
			bigFalconRocketInfo(res);
		})
		.catch(err => console.log(err))
});

function bigFalconRocketInfo(result){
	let modalBody, pActive, active, pCostLaunch, costLaunch, pDiameter, diameter;
	let pFirstFlight, firstFlight, mass, pMass, payloadLEO, pPayloadLEO;
	let payloadMars, pPayloadMars;
	
	//active
	modalBody = document.getElementById("bfrModalBody");
	modalBody.innerHTML = "";
	
	if (result[3].active){
		active = document.createTextNode("Active: " + "Yes");
	}else{
		active = document.createTextNode("Active: " + "No");
	}
	pActive = document.createElement("p");
	pActive.appendChild(active);
	modalBody.appendChild(pActive);
	
	//cost per launch
	costLaunch = document.createTextNode("Cost per launch: $" + result[3].cost_per_launch);
	pCostLaunch = document.createElement("p");
	pCostLaunch.appendChild(costLaunch);
	modalBody.appendChild(pCostLaunch);
	
	//diamters
	diameter = document.createTextNode("Diameter: " + result[3].diameter.meters + " meters");
	pDiameter = document.createElement("p");
	pDiameter.appendChild(diameter);
	modalBody.appendChild(pDiameter);
	
	//first flight
	firstFlight = document.createTextNode("First flight: " + result[3].first_flight);
	pFirstFlight = document.createElement("p");
	pFirstFlight.appendChild(firstFlight);
	modalBody.appendChild(pFirstFlight);
	
	//Weight
	mass = document.createTextNode("Weight: " + result[3].mass.kg + " kg");
	pMass = document.createElement("p");
	pMass.appendChild(mass);
	modalBody.appendChild(pMass);
	
	//payload to low earth orbit
	payloadLEO = document.createTextNode("Payload to Low Earth Orbit: " + result[3].payload_weights[0].kg + "kg");
	pPayloadLEO = document.createElement("p");
	pPayloadLEO.appendChild(payloadLEO);
	modalBody.appendChild(pPayloadLEO);
	
	//payload to mars
	payloadMars = document.createTextNode("Payload to mars: " + result[3].payload_weights[1].kg + "kg");
	pPayloadMars = document.createElement("p");
	pPayloadMars.appendChild(payloadMars);
	modalBody.appendChild(pPayloadMars);
	
	console.log(result);
}


//Inline validation contactform
function validateInput(){
	let regExEmail, email, emailErr, message, messageErr;
	
	//check for valid input value in email field
	regExEmail = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,4}$/;
	email = document.getElementById("email");
	emailErr = document.getElementById("emailError");
	
	if (!regExEmail.test(email.value)){
		email.style.borderColor = "red";
		email.style.borderWidth = "3px";
		emailErr.style.display = "block";
		return false;
	}else{
		email.style.borderColor = "green";
		email.style.borderWidth = "3px";
		emailErr.style.display = "none";
	}
	
	//check for valid input in comment field
	message = document.getElementById("message");
	messageErr = document.getElementById("messageError");
	
	if (message.value === "" || message.value === undefined){
		message.style.borderColor = "red";
		message.style.borderWidth = "3px";
		messageErr.style.display = "block";
		return false;
	}else{
		message.style.borderColor = "green";
		message.style.borderWidth = "3px";
		messageErr.style.display = "none";
	}
}

//fetch data from ISS location api
function initMap(){
	fetch('http://api.open-notify.org/iss-now.json')
		.then(result => result.json())
		.then((res) => {
			map(res);
		})
		.catch(err => console.log(err))
}

//initialize google maps js API with ISS location data
function map(result){
	let issLat = result.iss_position.latitude;
	let issLong = result.iss_position.longitude;
	
	let location = {
		lat: parseInt(issLat),
		lng: parseInt(issLong)
	};

	let map = new google.maps.Map(document.getElementById("map"), {
		zoom: 3,
		center: location
	});

	let marker = new google.maps.Marker({
		position: location,
		icon: 'iss-2.png',
		map: map,
		title: 'International Space Station (ISS)'
	});
}