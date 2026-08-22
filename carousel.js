// Event Stall Carasol
const carouselImages = document.querySelectorAll(".carousel-image");

const prevSlide = document.querySelector(".prev-slide");
const nextSlide = document.querySelector(".next-slide");

const dotsContainer = document.querySelector(".carousel-dots");

let currentSlide = 0;
let autoSlide;


// Create dots
carouselImages.forEach((image, index) => {

    const dot = document.createElement("button");

    dot.classList.add("carousel-dot");

    if (index === 0) {
        dot.classList.add("active");
    }

    dot.setAttribute("aria-label", `Go to photo ${index + 1}`);

    dot.addEventListener("click", () => {
        currentSlide = index;
        showSlide();
        resetAutoSlide();
    });

    dotsContainer.appendChild(dot);

});


const dots = document.querySelectorAll(".carousel-dot");


// Show selected image
function showSlide() {

    carouselImages.forEach(image => {
        image.classList.remove("active");
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    carouselImages[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");

}


// Next image
function nextCarouselSlide() {

    currentSlide++;

    if (currentSlide >= carouselImages.length) {
        currentSlide = 0;
    }

    showSlide();
}


// Previous image
function previousCarouselSlide() {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = carouselImages.length - 1;
    }

    showSlide();
}


// Start automatic carousel
function startAutoSlide() {

    autoSlide = setInterval(() => {
        nextCarouselSlide();
    }, 6500);

}


// Reset automatic timer after manual use
function resetAutoSlide() {

    clearInterval(autoSlide);
    startAutoSlide();

}


// Arrow buttons
nextSlide.addEventListener("click", () => {
    nextCarouselSlide();
    resetAutoSlide();
});


prevSlide.addEventListener("click", () => {
    previousCarouselSlide();
    resetAutoSlide();
});


// Start automatically
startAutoSlide();