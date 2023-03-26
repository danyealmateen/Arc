import { spaceship } from "../Characters/characters.js";

function moveUp(): void {
  let topPosition = spaceship.offsetTop;
  topPosition -= 30;
  spaceship.style.top = topPosition + "px";
}
function moveDown(): void {
  let topPosition = spaceship.offsetTop;
  topPosition += 10;
  spaceship.style.top = topPosition + "px";
}
function moveLeft(): void {
  let leftPosition = spaceship.offsetLeft;
  leftPosition -= 30;
  spaceship.style.left = leftPosition + "px";
}
function moveRight(): void {
  let leftPosition = spaceship.offsetLeft;
  leftPosition += 30;
  spaceship.style.left = leftPosition + "px";
}

export { moveUp, moveDown, moveLeft, moveRight };
