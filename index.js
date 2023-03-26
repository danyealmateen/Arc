import { moveUp, moveDown, moveLeft, moveRight, } from "./src/Movements/basicMovement.js";
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
        moveUp();
    }
    else if (event.key === "ArrowDown") {
        moveDown();
    }
    else if (event.key === "ArrowLeft") {
        moveLeft();
    }
    else if (event.key === "ArrowRight") {
        moveRight();
    }
});
const spaceship = document.getElementById("spaceship");
const laser = document.getElementById("laser");
//Kollar om det finns någon laser på skärmen
let laserPosition = null;
let laserInterval = null;
//Lägger till ett event på mellanslag-tangeten
document.addEventListener("keydown", (event) => {
    //Kontrollerar om tangeten som trycks ner är "Space" med hjälp av .code
    if (event.code === "Space") {
        //Om inte laser finns så
        if (!laserInterval) {
            //Hämta rymdskeppets position, värdet för top positionen.
            laserPosition = parseInt(window.getComputedStyle(spaceship).getPropertyValue("top"));
            laser.style.top = laserPosition - 10 + "px";
            laser.style.left =
                parseInt(window.getComputedStyle(spaceship).getPropertyValue("left")) +
                    25 +
                    "px";
            laser.style.display = "block";
        }
    }
});
