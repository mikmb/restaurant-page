import "./styles.css";
import { emptyPageContent } from "./utility";
import { showHomePage } from "./home";
import { showMenuPage } from "./menu";
// import { showAboutPage } from "./about";
import { showContactUsPage } from "./contactUs";
// console.log("hi");

showHomePage();

let nav = document.querySelector("nav");
let navList = nav.childNodes;

navList.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    console.log("navItem: " + navItem.childNodes[0].textContent);
    let navName = navItem.childNodes[0].textContent;

    if (navName === "Home") {
      emptyPageContent();
      showHomePage();
    } else if (navName === "Menu") {
      emptyPageContent();
      showMenuPage();
    }
    // else if (navName === "About") {
    //   emptyPageContent();
    //   showAboutPage();
    // }
    else if (navName === "Contact Us") {
      emptyPageContent();
      showContactUsPage();
    }
  });
});
