let cursor = document.querySelector("#cursor");

let main = document.querySelector("#main");

let overlay1 = document.querySelector("#overlay1");

let overlay2 = document.querySelector("#overlay2");

let overlay3 = document.querySelector("#overlay3");

let overlay4 = document.querySelector("#overlay4");

let overlay5 = document.querySelector("#overlay5");

main.addEventListener("mousemove", (e) => {
  cursor.style.left = e.x + "px";
  cursor.style.top = e.y + "px";
});

overlay1.addEventListener("mousemove", (event) => {
  document.querySelector("#elem1 img").style.scale = 1;
  document.querySelector("#elem1 img").style.opacity = 1;
  cursor.style.opacity = 0;
  document.querySelector("#elem1 img").style.left = event.x - 120 + "px";
  document.querySelector("#elem1 img").style.top = event.y - 320 + "px";
});

overlay1.addEventListener("mouseleave", () => {
  document.querySelector("#elem1 img").style.scale = 0;
  document.querySelector("#elem1 img").style.opacity = 0;
  cursor.style.opacity = 1;
});

overlay2.addEventListener("mousemove", (event) => {
  document.querySelector("#elem2 img").style.scale = 1;
  document.querySelector("#elem2 img").style.opacity = 1;
  cursor.style.opacity = 0;
  document.querySelector("#elem2 img").style.left = event.x - 420 + "px";
  document.querySelector("#elem2 img").style.top = event.y - 320 + "px";
});

overlay2.addEventListener("mouseleave", () => {
  document.querySelector("#elem2 img").style.scale = 0;
  document.querySelector("#elem2 img").style.opacity = 0;
  cursor.style.opacity = 1;
});

overlay3.addEventListener("mousemove", (event) => {
  document.querySelector("#elem3 img").style.scale = 1;
  document.querySelector("#elem3 img").style.opacity = 1;
  cursor.style.opacity = 0;
  document.querySelector("#elem3 img").style.left = event.x - 730 + "px";
  document.querySelector("#elem3 img").style.top = event.y - 320 + "px";
});

overlay3.addEventListener("mouseleave", () => {
  document.querySelector("#elem3 img").style.scale = 0;
  document.querySelector("#elem3 img").style.opacity = 0;
  cursor.style.opacity = 1;
});

overlay4.addEventListener("mousemove", (event) => {
  document.querySelector("#elem4 img").style.scale = 1;
  document.querySelector("#elem4 img").style.opacity = 1;
  cursor.style.opacity = 0;
  document.querySelector("#elem4 img").style.left = event.x - 1030 + "px";
  document.querySelector("#elem4 img").style.top = event.y - 320 + "px";
});

overlay4.addEventListener("mouseleave", () => {
  document.querySelector("#elem4 img").style.scale = 0;
  document.querySelector("#elem4 img").style.opacity = 0;
  cursor.style.opacity = 1;
});

overlay5.addEventListener("mousemove", (event) => {
  document.querySelector("#elem5 img").style.scale = 1;
  document.querySelector("#elem5 img").style.opacity = 1;
  cursor.style.opacity = 0;
  document.querySelector("#elem5 img").style.left = event.x - 1335 + "px";
  document.querySelector("#elem5 img").style.top = event.y - 300 + "px";
});

overlay5.addEventListener("mouseleave", () => {
  document.querySelector("#elem5 img").style.scale = 0;
  document.querySelector("#elem5 img").style.opacity = 0;
  cursor.style.opacity = 1;
});
