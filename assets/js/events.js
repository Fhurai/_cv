var cardType = "identity";

document.addEventListener("DOMContentLoaded", function () {
  Creator.createLoading(document.getElementById("content").parentElement);

  document.getElementById("loading").classList.toggle("load");
  Creator.createNavbar(document.getElementById("content"));

  Creator.createCards(document.getElementById("content"));

  clickCards();
  showCards();
  document.getElementById("loading").classList.toggle("load");
});

function clickCards() {
  const buttons = Array.from(document.querySelectorAll("nav ul li"));

  buttons.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      cardType = event.currentTarget.dataset.class;
      document.querySelector("input").checked = false;
      showCards();

      setTimeout(scrollToTopOfCardsWithOffset, 10);
    });
  });
}

function showCards() {
  const cards = Array.from(document.querySelectorAll(".card"));

  cards.forEach((card) => {
    if (!card.classList.contains(cardType)) {
      card.classList.remove("visible");
    } else {
      card.classList.add("visible");
    }
  });
}

function scrollToTopOfCardsWithOffset() {
  const cardsContainer = document.getElementById("cards");
  const rect = cardsContainer.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const offset = -100; // Adjust this value as needed

  window.scrollTo({
    top: rect.top + scrollTop + offset,
    behavior: "smooth",
  });
}
