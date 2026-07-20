const sliders = document.querySelectorAll(".slider");

sliders.forEach(slider => {

    const before = slider
        .previousElementSibling
        .querySelector(".before-container");

    slider.addEventListener("input", () => {

        before.style.width = slider.value + "%";

    });

});