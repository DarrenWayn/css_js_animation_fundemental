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

document.body.addEventListener("click", (ev) => {
  let target = ev.target;
  let tag = target.localName;
  if (tag === "p" || tag === "h1") {
    console.log(target.innerHTML);
    let pre = document.createElement("pre");
    pre.innerHTML = target.innerHTML; //copy of the text inside
    document.querySelector("main").append(pre);

    console.log(target.outerHTML);
    let elementString = target.outerHTML;
    document.querySelector("main").innerHTML += elementString;
    /* target.innerHTML = "hello"; */
    /* target.outerHTML = "<h3>goodbye</h3>"; */

    let htmlString = target.outerHTML;
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    document.querySelector("main").append(doc.body.firstElementChild);
  }
});
