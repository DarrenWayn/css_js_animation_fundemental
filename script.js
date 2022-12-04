"use strict";

let h1 = document.querySelector("h1");
h1.addEventListener("click", (ev) => {
  /* scrollBy(x, y); */
  /* scrollTo(x, y); */
  /* scrollX(x); */
  /* scrollY(y); */
  console.group();
  console.log("client", ev.clientX, ev.clientY);
  // top of the visible screen
  console.log("page", ev.pageX, ev.pageY);
  // top of the document(webpage)
  console.log("offset", h1.offsetLeft, h1.offsetTop);
  console.log("screen window", window.screenX, window.screenY);

  console.log("screen ev", ev.screenX, ev.screenY);
  console.groupEnd();
  window.scrollBy(0, 600);
});

window.addEventListener("scroll", (ev) => {
  console.group();
  console.log("client", ev.clientX, ev.clientY);
  // top of the visible screen
  console.log("page", ev.pageX, ev.pageY);
  // top of the document(webpage)
  console.log("offset", h1.offsetLeft, h1.offsetTop);
  console.log("screen window", window.screenX, window.screenY);

  console.log("screen ev", ev.screenX, ev.screenY);
  console.groupEnd();

  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 2000);
});
