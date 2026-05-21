"use strict";

// laver loop sektion

// const imgTrack=document.querySelector(".img-track"); finder listen med billeder
const imageTrack = document.querySelector(".img-track");
// const originalImages = imgTrack.innerHTML Gemmer alt indholdet inde i listen. Altså alle dine <li> med billeder.
const originalImages = imageTrack.innerHTML;
// imgTrack.innerHTML += originalImages; Kopierer billederne og sætter dem ind én gang mere. den hakker ikke
imageTrack.innerHTML += originalImages;




// ændre billede når man klikker på farven 
    //Finder produktbilledet:
    const productImage = document.querySelector("#product-image");
    //Finder alle farveknapperne:
    const colorButtons = document.querySelectorAll(".color-option");


    // looper alle farveknapper en efter en
    for (const button of colorButtons) {
      //Siger: “Når brugeren klikker på denne knap, skal der ske noget.”
      button.addEventListener("click", function () {
        // Henter værdien fra data-image.
        const newImage = button.dataset.image;

        // Skifter produktbilledets src, altså billedfilen.
        productImage.src = newImage;
        // Skifter alt-teksten, så den passer til den nye farve.
        productImage.alt = newAlt;

        for (const button of colorButtons) {
          button.classList.remove("active");
        }

        // Tilføjer classen active til den valgte farveknap.
        // Så kan du style den valgte farve med CSS.
        button.classList.add("active");
      });
    }