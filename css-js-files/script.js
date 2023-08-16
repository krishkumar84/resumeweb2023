

const texts = ["web Designer","web Devlepor","Graphic Designer","Youtuber"];
let index = 0;
let textIndex = 0;
let currentText = "";
let backspace = false;
const element = document.getElementById("typing-text");

function type() {
    if (backspace) {
        currentText = currentText.slice(0, -1);
        element.innerHTML = currentText;
        if (currentText.length === 0) {
            backspace = false;
            textIndex++;
            if (textIndex === texts.length) {
                textIndex = 0;
            }
        }
    } else {
        currentText += texts[textIndex].charAt(index);
        element.innerHTML = currentText;
        index++;
        if (index === texts[textIndex].length) {
            index = 0;
            backspace = true;
        }
    }
    setTimeout(type, 100);

    
}

type();
// /* Aside*/
// const nav = document.querySelector(".nav"),
//       navList = nav.querySelectorAll("li"),
//       totalNavList = navList.length;
//       for(let i=0; i<totalNavList;i++)
//       {
//         const a = navList[i].querySelector("a");
//         a.addEventListener("click",function()
//         {
//             for(let j=0; j<totalNavList; j++)
//             {
//                 navList[j].querySelector("a").classList.remove("active")

//             }
//             this.classList.add("active")
//         })
//       }
//       const navTogglerBtn = document.querySelector(".nav-toggler"),
//       aside = document.querySelector(".aside");
//      navTogglerBtn.addEventListener("click",() =>
//      {
//         asideSectionTogglerBtn();
//      })
//      function asideSectionTogglerBtn()
//      {
//         aside.classList.toggle("open");
//         navTogglerBtn.classList.toggle("open");
//         for(let i=0; i<totalSection; i++ )
//         {
//             allSection[i].classList.toggle("open");
//         }
//      }

//     // Event listener for clicking on a navigation item
// const navItems = document.querySelectorAll(".nav-item");
// navItems.forEach(item => {
//   item.addEventListener("click", () => {
//     removeOpenClasses();
//   });
// });

// // Event listener for scrolling
// window.addEventListener("scroll", () => {
//   removeOpenClasses();
// });

      
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    for (let j = 0; j < totalNavList; j++) {
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    asideSectionTogglerBtn(); // Close the aside when a navigation item is clicked
  });
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}

// Event listener for scrolling
window.addEventListener("scroll", () => {
  removeOpenClasses();
});

function removeOpenClasses() {
  aside.classList.remove("open");
  navTogglerBtn.classList.remove("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("open");
  }
}

