// get current time and display it
function updateTime() {
    let now = new Date();
    let timeEl = document.getElementById("time");
    timeEl.textContent = now.toLocaleTimeString();
}

// display suggestions when input is focused
function showSuggestions() {
    let suggestionsEl = document.querySelector(".suggestions");
    suggestionsEl.style.display = "block";
}

// hide suggestions when input is blurred
function hideSuggestions() {
    let suggestionsEl = document.querySelector(".suggestions");
    suggestionsEl.style.display = "none";
}

// add event listeners
let inputEl = document.querySelector("input[type='text']");
inputEl.addEventListener("focus", showSuggestions);
inputEl.addEventListener("blur", hideSuggestions);

// update time every second
setInterval(updateTime, 1000);