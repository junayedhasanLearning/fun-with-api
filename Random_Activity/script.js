const URL = "https://www.boredapi.com/api/activity/";

const display = document.querySelector(".container input");

document
  .querySelector(".container button")
  .addEventListener("click", async () => {
    const response = await fetch(URL);
    const data = await response.json();
    let activity = data.activity;
    display.value = activity;
  });
