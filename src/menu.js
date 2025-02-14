import berryTart from "./asset/berry-tart.jpg";
import chocolateCake from "./asset/chocolate-cake.jpg";
import painAuChocolat from "./asset/pain-au-chocolat.jpg";
import raisinLoaf from "./asset/raisin-loaf.jpg";

export function showMenuPage() {
  let menu = [
    {
      name: "Berry Tart",
      price: "$7.99",
      picture: berryTart,
      imageCredit: "Photo by Oliver-Timm Haarmann on Unsplash",
    },
    {
      name: "Chocolate Cake",
      price: "$8.50",
      picture: chocolateCake,
      imageCredit: "Photo by Yu Jinyang on Unsplash",
    },
    {
      name: "Pain Au Chocolat",
      price: "$5.50",
      picture: painAuChocolat,
      imageCredit: "Photo by Nicholas Doyle on Unsplash",
    },
    {
      name: "Raisin Loaf",
      price: "$6.00",
      picture: raisinLoaf,
      imageCredit: "Photo by Yulia Khlebnikova on Unsplash ",
    },
  ];

  let menuCards = "";
  for (let i = 0; i < menu.length; i++) {
    menuCards += `<div class="menu-card">
    <img class="menu-item-img" src="${menu[i].picture}" alt="${menu[i].name}">
    <div class="overlay">
        <div class="img-credit">${menu[i].imageCredit}</div>
    </div>
    <p class="menu-item-name">${menu[i].name}</p>
    <p class="menu-item-price">${menu[i].price}</p>
    </div>`;
  }
  let content = document.querySelector("#content");
  let menuPageTile = document.createElement("div");
  menuPageTile.className = "menu-page";
  menuPageTile.innerHTML = `<h1>Our scrumptious Menu</h1><div class="cards-container">
  ${menuCards}
  </div>`;
  content.appendChild(menuPageTile);
}
