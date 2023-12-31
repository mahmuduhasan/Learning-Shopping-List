// JavaScript Event Listener
// Basic Events
// const clearBtn = document.getElementById("clear");
// const logo = document.querySelector("img");
// const itemInput = document.getElementById("item-input");
// const priorityInput = document.getElementById("priority-input");
// const checkBox = document.getElementById("checkbox");
// const heading = document.querySelector("h1");
// const form = document.getElementById("item-form");
// const button = document.querySelector("form button");
// const listItem = document.querySelectorAll("li");
// const list = document.querySelector("ul");
// clearBtn.onclick = function () {
//   alert("Clear Items");
// };

// clearBtn.onclick = function () {
//   console.log("Clear Items");
// };

// function onClear() {
// console.log("I am from func onClear");
// Remove li
//   const itemList = document.querySelectorAll("#item-list li");
//   const itemParent = document.querySelector("ul");
// console.log(itemList);
// itemList.forEach((item) => {
//   item.remove();
//   item.innerHTML = "";
// });

//   while (itemParent.firstChild) {
//     itemParent.removeChild(itemParent.firstChild);
//   }
// }

// Add Event Listener

// clearBtn.addEventListener("click", () => {
//   alert("Clear Item");
// });

// clearBtn.addEventListener("click", () => {
//   console.log("Clear Item");
// });

// clearBtn.addEventListener("click", onClear);

// Remove Event Listener

// setTimeout(() => {
//   clearBtn.removeEventListener("click", onClear);
// }, 5000);

// setTimeout(() => {
//   clearBtn.click();
// }, 1000);

// const onClick = () => {
//   console.log("I am clicked!");
// };

// const onDblClick = () => {
//   console.log("I am double clicked!");
//   if (document.body.style.backgroundColor !== "purple") {
//     document.body.style.backgroundColor = "purple";
//     document.body.style.color = "white";
//   } else {
//     document.body.style.backgroundColor = "white";
//     document.body.style.color = "black";
//   }
// };

// const onRightClick = () => {
//   console.log("I am right clicked!");
// };

// const onMouseDown = () => {
//   console.log("I am dragged down!");
// };

// const onMouseUp = () => {
//   console.log("I am pulled up!");
// };

// const onMouseOver = () => {
//   console.log("I am over the element!");
// };

// const onMouseOut = () => {
//   console.log("I am going out of the element!");
// };

// const onDragStart = () => console.log("I am dragged!");

// const onDrag = () => console.log("I am still being dragged!");

// const onDragEnd = () => console.log("I am done dragging!");

// logo.addEventListener("click", onClick);
// logo.addEventListener("dblclick", onDblClick);
// logo.addEventListener("contextmenu", onRightClick);
// logo.addEventListener("mousedown", onMouseDown);
// logo.addEventListener("mouseup", onMouseUp);
// logo.addEventListener("mouseover", onMouseOver);
// logo.addEventListener("mouseout", onMouseOut);
// logo.addEventListener("dragstart", onDragStart);
// logo.addEventListener("drag", onDrag);
// logo.addEventListener("dragend", onDragEnd);

// logo.addEventListener("click", function (e) {
// console.log(e.target);
// console.log(e.currentTarget);
// e.target.style.backgroundColor = "black";
// console.log(e.type);
// console.log(e.clientX);
// console.log(e.clientY);
// console.log(e.offsetX);
// console.log(e.offsetY);
// console.log(e.pageX);
// console.log(e.pageY);
// console.log(e.screenX);
// console.log(e.screenY);
// });

// logo.addEventListener("drag", (e) => {
//   console.log(e.offsetX);
//   console.log(e.offsetY);
// });

// document.body.addEventListener("click", (e) => {
//   console.log(e.target);
//   console.log(e.currentTarget);
// });

// Keyboard Events

// const itemInput = document.getElementById("item-input");

// itemInput.addEventListener("keypress", (e) => {
//   console.log("keypress");
// });

// itemInput.addEventListener("keyup", (e) => {
//   console.log("keyup");
// });

// itemInput.addEventListener("keydown", (e) => {
// console.log("keydown");

// Key
// console.log(e.key);
// KeyCode
// console.log(e.keyCode);
// Code
//   console.log(e.code);
//   if (e.key === "Enter") {
//     e.preventDefault();
//   }

//   if (e.repeat) {
//     console.log("You are holding down!" + e.key);
//   }
// });

// console.log(itemInput, priorityInput, checkBox, heading);

// itemInput.addEventListener("input", (e) => {
//   heading.textContent = e.target.value;
// });

// priorityInput.addEventListener("change", (e) => {
//   heading.textContent = e.target.value;
// });

// checkBox.addEventListener("change", (e) => {
//   heading.textContent = e.target.checked ? "Checked" : "Not Checked";
// });

// itemInput.addEventListener("focus", (e) => {
//   console.log("Input is focused!");
//   itemInput.style.outlineStyle = "solid";
//   itemInput.style.outlineWidth = "1px";
//   itemInput.style.outlineColor = "red";
// });

// itemInput.addEventListener("blur", (e) => {
//   console.log("Input is not focused!");
//   itemInput.style.outlineStyle = "none";
// });

// const onSubmit = (e) => {
//   e.preventDefault();
// console.log("Submit");
// console.log(itemInput.value, priorityInput.value);
//   const formData = new FormData(form);

//   const item = formData.get("item");
//   const priority = formData.get("priority");

//   if (item === "" || priority === "0") {
//     alert("Please fill all fields!");
//     return;
//   }
//   console.log(item, priority);
// };

// form.addEventListener("submit", onSubmit);

// Event Bubbling

// button.addEventListener("click", (e) => {
//   alert("Button was clicked!");
//   e.stopPropagation();
// });
// form.addEventListener("click", () => {
//   alert("Form was clicked!");
// });

// document.body.addEventListener("click", () => {
//   alert("Body was clicked!");
// });

// Event Delegation

// listItem.forEach((item) => {
//   item.addEventListener("click", (e) => {
// console.log(e.target);
//     e.target.remove();
//   });
// });

// list.addEventListener("click", (e) => {
//   if (e.target.tagName === "LI") {
//     e.target.remove();
//   }
// });
