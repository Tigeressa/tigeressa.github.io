//Areas on which to drag cursor for animation to occur
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const title = document.querySelector(".lbf-title");
const books = document.querySelector(".books img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".information h3");
const earlyBird = document.querySelector(".early-bird");

//Moving animation event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate in
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  title.style.transform = "translateZ(150px)";
  books.style.transform = "translateZ(200px) rotateZ(-45deg)";
  description.style.transform = "translateZ(125px)";
  earlyBird.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
});
//Animate out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title.style.transform = "translateZ(0px)";
  books.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  earlyBird.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});