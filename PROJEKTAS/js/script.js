// SLIDESHOW JS
var slideIndex = 0;
showSlides();

function showSlides() {
var i;
var slides = document.getElementsByClassName("slideshow");
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1;}
slides[slideIndex-1].style.display = "block";
setTimeout(showSlides, 5000);
}


// COUNTER
const speed = 200;

document.querySelectorAll('#counter').forEach(counter => {

	const counterNumber = +counter.getAttribute('countTo');

	const updateCount = setInterval(() => {
        
		const divContent = +counter.innerText;
		const increaseBy = counterNumber / speed;

		divContent < counterNumber ? 
		counter.innerHTML = Math.ceil(divContent + increaseBy) : 
		clearInterval(updateCount);

	}, 1);

});