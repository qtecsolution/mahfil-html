const mobInput = document.querySelector("#mobilesearch-field");
const mobSuggestion = document.querySelector(".mobilesuggestion");

mobInput.addEventListener("keyup", (e) => {
  let suggestionInfo = e.target.value;

  if (suggestionInfo) {
    mobSuggestion.classList.add("active");
  } else {
    mobSuggestion.classList.remove("active");
  }
});
