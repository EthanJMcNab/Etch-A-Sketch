// Creates Body Element
const body = document.querySelector("body");

// Creates and appends the title to Body Element
const titleText = document.createTextNode("Etch-A-Sketch!");
const title = document.createElement("h1");
title.appendChild(titleText);
body.appendChild(title);

// Creates and appends the Etch-A-Sketch container
const container = document.createElement("div");
container.classList.add("container");
body.appendChild(container);