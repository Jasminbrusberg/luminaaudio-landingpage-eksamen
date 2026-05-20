"use strict";

// laver loop sektion

// const imgTrack=document.querySelector(".img-track"); finder listen med billeder
const imageTrack = document.querySelector(".img-track");
// const originalImages = imgTrack.innerHTML Gemmer alt indholdet inde i listen. Altså alle dine <li> med billeder.
const originalImages = imageTrack.innerHTML;
// imgTrack.innerHTML += originalImages; Kopierer billederne og sætter dem ind én gang mere. den hakker ikke
imageTrack.innerHTML += originalImages;