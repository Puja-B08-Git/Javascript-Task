// let box = document.querySelector(".container");

// let list = document.querySelector(".list");

// //items add
// //method 1:
// let newElem = document.createElement("li");
// let text = document.createTextNode("text 5");
// newElem.appendChild(text)
// list.appendChild(newElem)
// newElem.id = "c5";
// newElem.className = "listItem"

// //method 2:
// let e = document.createElement("li");
// e.textContent = "test 6";
// list.appendChild(e);
// e.id = "c2";
// e.className = "listItem"

//--------------------------------------------------
// let newElem = document.createElement("li");
// newElem.textContent = "test 0";
// let list = document.querySelector(".list");

// let c2 = list.firstElementChild.nextElementSibling
// list.insertBefore(newElem,c2);

// let c = list.lastElementChild
// list.insertBefore(newElem,c)

//--------------------------------------------------
// let list = document.querySelector(".list")

// let target = list.chidren[1]

// list.removeChild(target)

//--------------------------------------------------

let box = document.querySelector(".container");
let list = document.querySelector(".list");
let copyedList =list.cloneNode(true)
console.log(copyedList);
box.appendChild(copyedList)

