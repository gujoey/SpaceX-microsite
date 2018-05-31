//hamburger menu to X on click
document.querySelector("#nav-toggle").addEventListener("click", function(){
	this.classList.toggle("active");
});


//initialize fullPage.js
$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'lastPage'],
		menu: '#myMenu',
		//navigation: true,
		scrollOverflow: true
	});
});

//rotate plus to x and display none / block on launch dates content
$(document).on('click','.button', function(e){
   e.preventDefault();
	$(this).toggleClass("rotate");
   	$(this).next('.info-expanded').toggle(400);
});


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