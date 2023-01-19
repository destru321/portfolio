import basketball from "./src/basketball.svg";
import hamburger from "./src/icon.png";
import japan from "./src/japan.svg";
import me from "./src/me.jpg";
import music from "./src/music.svg";
import programming from "./src/programming.svg";

document.querySelector('.logo').style.backgroundImage = `url(${programming})`;
document.querySelector('.picture').style.backgroundImage = `url(${me})`;
document.querySelector('.header__icon').style.backgroundImage = `url(${hamburger})`;
document.querySelector('.basketball--photo').style.backgroundImage = `url(${basketball})`;
document.querySelector('.music--photo').style.backgroundImage = `url(${music})`;
document.querySelector('.japan--photo').style.backgroundImage = `url(${japan})`;

document.querySelector('.header__icon').addEventListener('click', () => {
  document.querySelector('.nav').classList.toggle('nav--visible');
})

document.querySelector('.AboutBtn').addEventListener('click', () => {
  let rect = document.getElementById('about').getBoundingClientRect();
  window.scrollTo(rect.x, rect.y - 20)
})

document.querySelector('.SkillsBtn').addEventListener('click', () => {
  let rect = document.getElementById('skills').getBoundingClientRect();
  window.scrollTo(rect.x, rect.y - 20)
})

document.querySelector('.ProjectsBtn').addEventListener('click', () => {
  let rect = document.getElementById('projects').getBoundingClientRect();
  window.scrollTo(rect.x, rect.y - 20)
})