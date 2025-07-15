// Global variable to keep track of the currently selected card type
var cardType = "professional";
var token = "";

// Wait for the DOM to be fully loaded before running the main logic
document.addEventListener("DOMContentLoaded", function () {
  getAndUseAccessToken();
  // Create and display a loading indicator
  Creator.createLoading(document.getElementById("content").parentElement);

  // Toggle the loading animation on
  document.getElementById("loading").classList.toggle("load");

  // Create the navigation bar inside the content element
  Creator.createNavbar(document.getElementById("content"));

  // Create the cards inside the content element
  Creator.createCards(document.getElementById("content"));

  // Set up click event listeners for navigation buttons
  clickCards();

  // Show cards of the default type
  showCards();

  // Toggle the loading animation off
  document.getElementById("loading").classList.toggle("load");

  const total = Array.from(document.querySelectorAll('.card.professional [role="periode"]'))
      .map((div) => {
        return parseInt(
          div.dataset.diff.substring(0, div.dataset.diff.indexOf(" mois"))
        );
      })
      .reduce((sum, val) => sum + val, 0);

  const years = Math.floor(total / 12);
  document.querySelector('li[data-class="professional"]').title = `${total} mois / ${years} an${years > 1 ? 's' : ''} & ${total - (years * 12)} mois`;
});

/**
 * Adds click event listeners to each navigation button.
 * When a button is clicked, updates the cardType, unchecks the input (likely a menu toggle),
 * shows the relevant cards, and scrolls to the top of the cards section.
 */
function clickCards() {
  if(token === "THVjYXNLdW50ejU3MDcwTWV0eg=="){
    cardType = "identity";
  }
  // Get all navigation buttons as an array
  const buttons = Array.from(document.querySelectorAll("nav ul li"));

  buttons.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      // Update the global cardType based on the clicked button's data-class attribute
      cardType = event.currentTarget.dataset.class;

      // Uncheck the first input element (assumed to be a menu toggle)
      document.querySelector("input").checked = false;

      // Show cards matching the selected type
      showCards();

      // Scroll to the top of the cards section after a short delay
      setTimeout(scrollToTopOfCardsWithOffset, 10);
    });
  });
}

/**
 * Shows only the cards that match the current cardType.
 * Adds the 'visible' class to matching cards and removes it from others.
 */
function showCards() {
  // Get all card elements as an array
  const cards = Array.from(document.querySelectorAll(".card"));

  cards.forEach((card) => {
    // If the card does not have the class matching cardType, hide it
    if (!card.classList.contains(cardType)) {
      card.classList.remove("visible");
    } else {
      // Otherwise, show it
      card.classList.add("visible");
    }
  });
}

/**
 * Scrolls the window to the top of the cards section, with an offset.
 * Useful for bringing the cards into view after navigation.
 */
function scrollToTopOfCardsWithOffset() {
  // Get the cards container element
  const cardsContainer = document.getElementById("cards");

  // Get the position of the cards container relative to the viewport
  const rect = cardsContainer.getBoundingClientRect();

  // Get the current scroll position
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Offset to adjust the final scroll position (e.g., to account for a fixed header)
  const offset = -100; // Adjust this value as needed

  // Smoothly scroll to the calculated position
  window.scrollTo({
    top: rect.top + scrollTop + offset,
    behavior: "smooth",
  });
}

function getAndUseAccessToken(){
  const params = new URLSearchParams(window.location.search);
  if(params.size === 1 && params.get("access_token") !== ""){
    const param = params.get("access_token");
    token = base64Encode(param);
  }
}

function base64Encode(str) {
  return btoa(unescape(encodeURIComponent(str)));
}

function base64Decode(encoded) {
  return decodeURIComponent(escape(atob(encoded)));
}