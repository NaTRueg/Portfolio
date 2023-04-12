const loader = document.querySelector('.loader');


window.addEventListener('load', () => {

    loader.classList.add('fondu-out');
    
})

const menuHamburger = document.querySelector(".menu-burger")
const navLinks = document.querySelector(".nav-links")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})


var req = new XMLHttpRequest();
var url = "https://api.nasa.gov/planetary/apod?api_key=";
var api_key = "KAWRehL2pZsASCBznFwsjuONu3gi29ccmduSSyN8";

req.open("GET", url + api_key);
req.send();

req.addEventListener("load", function(){
	if(req.status == 200 && req.readyState == 4){
  	var response = JSON.parse(req.responseText);
    document.getElementById("title").textContent = response.title;
    document.getElementById("date").textContent = response.date;
    document.getElementById("pic").src = response.hdurl;
    document.getElementById("explanation").textContent = response.explanation;
  }
})