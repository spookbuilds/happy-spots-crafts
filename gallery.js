const sliders = document.querySelectorAll(".slider");

sliders.forEach(slider => {

    const before = slider
        .previousElementSibling
        .querySelector(".before-container");

    slider.addEventListener("input", () => {

        before.style.width = slider.value + "%";

    });

});





// Lightbox - 

const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");

const lightboxTitle = document.querySelector(".lightbox-title");
const lightboxDescription = document.querySelector(".lightbox-description");

const close = document.querySelector(".close");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");


let currentIndex = 0;


// Open lightbox
galleryImages.forEach((image, index) => {

    image.addEventListener("click", () => {

        currentIndex = index;

        showImage();

        lightbox.style.display = "flex";

    });

});


// Show selected image
function showImage() {

    const currentImage = galleryImages[currentIndex];

    lightboxImage.src = currentImage.src;

    lightboxTitle.textContent = currentImage.dataset.title;

    lightboxDescription.textContent =
        currentImage.dataset.description;

}


// Next image
function nextImage(){

    currentIndex++;

    if(currentIndex >= galleryImages.length){
        currentIndex = 0;
    }

    showImage();

}


// Previous image
function previousImage(){

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = galleryImages.length - 1;
    }

    showImage();

}


// Buttons
next.addEventListener("click", nextImage);

prev.addEventListener("click", previousImage);


// Close button
close.addEventListener("click", () => {

    lightbox.style.display="none";

});


// Click outside image closes
lightbox.addEventListener("click", (e)=>{

    if(e.target === lightbox){
        lightbox.style.display="none";
    }

});


// Keyboard controls
document.addEventListener("keydown", (e)=>{

    if(lightbox.style.display === "flex"){

        if(e.key === "ArrowRight"){
            nextImage();
        }


        if(e.key === "ArrowLeft"){
            previousImage();
        }


        if(e.key === "Escape"){
            lightbox.style.display="none";
        }

    }

});