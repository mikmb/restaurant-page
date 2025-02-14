import bakeryImage from "./asset/bakery-photo.jpg";

export function showHomePage() {
  let content = document.querySelector("#content");
  let homePageTitle = document.createElement("div");
  homePageTitle.className = "home-page-title";
  let homePageTitleHeading = document.createElement("h1");
  homePageTitleHeading.className = "home-page-title-heading";
  homePageTitleHeading.textContent = "A Taste You'll Come Back For";
  homePageTitle.appendChild(homePageTitleHeading);
  let homePageTitleHeadingDetail = document.createElement("p");
  homePageTitleHeadingDetail.textContent =
    "Lorem ipsum odor amet, consectetuer adipiscing elit. Mi tristique potenti pulvinar rhoncus ipsum a fames libero. Leo penatibus ultricies etiam accumsan finibus semper eget mattis. Donec bibendum porta nascetur luctus, lectus odio vestibulum. Pretium lorem netus mattis facilisi lacinia quis finibus tortor. Ex quis habitasse consectetur odio erat scelerisque justo. Fringilla pharetra donec eu rutrum viverra pellentesque malesuada tellus.";
  homePageTitle.appendChild(homePageTitleHeadingDetail);
  content.appendChild(homePageTitle);

  let bakeryImageDiv = document.createElement("div");
  bakeryImageDiv.className = "bakery-image";
  let bakeryImageImg = document.createElement("img");
  bakeryImageImg.className = "bakery-image-class";
  bakeryImageImg.src = bakeryImage;
  bakeryImageDiv.appendChild(bakeryImageImg);
  content.appendChild(bakeryImageDiv);
}
