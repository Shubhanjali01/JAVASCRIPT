// Image Slider

const slides = document.querySelectorAll(".slides img");// selects all images within the container with class "slides"
let slideIndex = 0;// tracks the current slide
let intervalId = null;// to store the interval ID for automatic sliding

//initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider); // Ensure the DOM is fully loaded before initializing the slider

function initializeSlider(){

    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide"); // Display the first slide
        intervalId = setInterval(nextSlide,5000); // Set up automatic sliding every 5 seconds
        // console.log(intervalId);
    }
// console.log(intervalId);
} // Initialize the slider by displaying the first slide and setting up automatic sliding



function showSlide(index){
   if(index >= slides.length){
    slideIndex = 0; // Wrap around to the first slide if index exceeds the number of slides
}else if(index<0){
    slideIndex = slide.length - 1; // Wrap around to the last slide if index is negative
   }
   slides.forEach(slide=>{
    slide.classList.remove("displaySlide");// Hide all slides
   })

   slides[slideIndex].classList.add("displaySlide");
}// Show the slide at the given index and hide all others

function prevSlide(){

    clearInterval(intervalId);

    slideIndex--;// Move to the previous slide index
    showSlide(slideIndex);
}// Show the previous slide and reset the automatic sliding interval

function nextSlide()
{
    slideIndex++;// Move to the next slide index
    showSlide(slideIndex);
}// Show the next slide and reset the automatic sliding interval