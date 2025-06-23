// const parent = document.querySelector(".parent");
// console.log(parent);
// console.log(parent.children);
// for (let i = 0; i < parent.children.length; i++) {
//   console.log(parent.children[i].innerHTML);
//   parent.children[i].style.color = "orange";
// }

// parent.firstElementChild.style.color = "red";

//-------------creating new element------------------------------------

// const div = document.createElement("div");

// div.style.backgroundColor = "green";

// const divText = document.createTextNode("Div is Created");
// div.appendChild(divText);
// document.body.appendChild(div);

// div.style.padding = "12px";
// div.style.borderRadius = "15px";

// const heading = document.createElement("h1");

// heading.style.color = "orange";
// heading.innerHTML = "h1 is created inside div";
// document.body.appendChild(heading);
// div.appendChild(heading);

//----------edit and remove elements---------------------------------------

document.body.style.backgroundColor = "grey";

// function addLanguage(langName) {
//   const li = document.createElement("li");
//   li.innerText = langName;
//   const ul = document.querySelector(".abc");
//   ul.appendChild(li);

// }

//addLanguage("typeScript");

// function addLanguageOpti(langName) {
//   const li = document.createElement("li");
//   li.appendChild(document.createTextNode(langName));
//   const ul = document.querySelector(".abc").appendChild(li);
// }

// addLanguageOpti("typescript");
// addLanguageOpti("JAVA");

/*
- Dender proto
- Call Apply Bind Implementation
*/

//----------------eventListner------------------------------------

// const b1 = document.getElementById("clickButton");
// const h1 = document.getElementById("heading1");
// console.log(b1);

// b1.addEventListener("click", () => {
//   h1.style.color = "green";
// });

const allChildren = document.querySelector("body").children;

for (let i = 0; i < allChildren.length; i++) {
  allChildren.item(i).addEventListener("click", () => {
    if (allChildren.item(i).style.color === "red") {
      allChildren.item(i).style.color = "blue";
    } else {
      allChildren.item(i).style.color = "red";
    }
  });
}
