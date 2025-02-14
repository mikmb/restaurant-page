export function showContactUsPage() {
  let content = document.querySelector("#content");
  let contactUsContainer = document.createElement("div");
  contactUsContainer.className = "contact-us-container";
  let phoneNumberDiv = document.createElement("div");
  let phoneNumberH2 = document.createElement("h2");
  phoneNumberH2.innerHTML = "Tell:";
  let phoneNumberInfo = document.createElement("p");
  phoneNumberInfo.innerHTML = "(123) 456 - 7890";
  phoneNumberDiv.appendChild(phoneNumberH2);
  phoneNumberDiv.appendChild(phoneNumberInfo);
  contactUsContainer.appendChild(phoneNumberDiv);
  let openingHoursDiv = document.createElement("div");
  let openingHoursH2 = document.createElement("h2");
  openingHoursH2.innerHTML = "Opening Hours:";
  let openingHoursInfo = document.createElement("p");
  openingHoursInfo.innerHTML = "Mon-Fri, 7am - 6pm";
  openingHoursDiv.appendChild(openingHoursH2);
  openingHoursDiv.appendChild(openingHoursInfo);
  contactUsContainer.appendChild(openingHoursDiv);
  let addressDiv = document.createElement("div");
  let addressH2 = document.createElement("h2");
  addressH2.innerHTML = "Location:";
  let addressInfo = document.createElement("p");
  addressInfo.innerHTML = "123 Street Name, City, State, 12345";
  addressDiv.appendChild(addressH2);
  addressDiv.appendChild(addressInfo);
  contactUsContainer.appendChild(addressDiv);

  content.appendChild(contactUsContainer);
}
