// API base URL
const baseURL = "https://randomuser.me/api";

// DOM elements
const elements = {
  generateBtn: document.querySelector("#button"),
  details: document.querySelector(".details"),
  genderSelection: document.querySelector(".gender-selection select"),
  name: document.querySelector(".name"),
  street: document.querySelector(".street span"),
  city: document.querySelector(".city span"),
  country: document.querySelector(".country span"),
  email: document.querySelector(".email p span"),
};

// Event listener for generating user data
elements.generateBtn.addEventListener("click", async () => {
  // Fetching user data based on selected gender
  const response = await fetch(
    `${baseURL}?gender=${elements.genderSelection.value}`
  );
  const userData = (await response.json()).results[0];

  // Displaying user details
  elements.name.innerHTML = `${userData.name.first} ${userData.name.last}`;
  elements.street.innerHTML = `${userData.location.street.number} ${userData.location.street.name}`;
  elements.city.innerHTML = userData.location.city;
  elements.country.innerHTML = userData.location.country;
  elements.email.innerHTML = userData.email;

  // Displaying user details container
  elements.details.style.display = "block";
});
