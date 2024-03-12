const reviewList = document.querySelector(".reviews__list");
const mockReviews = [
  {
    imgSrc: "assets/user.png",
    name: "Константин Константинополь",
    country: "Москва, Россия",
    text: `Каждый из нас понимает очевидную вещь: перспективное планирование
    предоставляет широкие возможности для анализа существующих
    паттернов поведения. В своём стремлении улучшить пользовательский
    опыт мы упускаем, что активно развивающиеся страны третьего мира
    призваны к ответу.`,
  },
  {
    imgSrc: "assets/user.png",
    name: "Константин Константинополь",
    country: "Москва, Россия",
    text: `Каждый из нас понимает очевидную вещь: перспективное планирование
    предоставляет широкие возможности для анализа существующих
    паттернов поведения. В своём стремлении улучшить пользовательский
    опыт мы упускаем, что активно развивающиеся страны третьего мира
    призваны к ответу.`,
  },
  {
    imgSrc: "assets/user.png",
    name: "Константин Константинополь",
    country: "Москва, Россия",
    text: `Каждый из нас понимает очевидную вещь: перспективное планирование
    предоставляет широкие возможности для анализа существующих
    паттернов поведения. В своём стремлении улучшить пользовательский
    опыт мы упускаем, что активно развивающиеся страны третьего мира
    призваны к ответу.`,
  },
  {
    imgSrc: "assets/user.png",
    name: "Константин Константинополь",
    country: "Москва, Россия",
    text: `Каждый из нас понимает очевидную вещь: перспективное планирование
    предоставляет широкие возможности для анализа существующих
    паттернов поведения. В своём стремлении улучшить пользовательский
    опыт мы упускаем, что активно развивающиеся страны третьего мира
    призваны к ответу.`,
  },
  {
    imgSrc: "assets/user.png",
    name: "Константин Константинополь",
    country: "Москва, Россия",
    text: `Каждый из нас понимает очевидную вещь: перспективное планирование
    предоставляет широкие возможности для анализа существующих
    паттернов поведения. В своём стремлении улучшить пользовательский
    опыт мы упускаем, что активно развивающиеся страны третьего мира
    призваны к ответу.`,
  },
  {
    imgSrc: "assets/user.png",
    name: "Константин Константинополь",
    country: "Москва, Россия",
    text: `Каждый из нас понимает очевидную вещь: перспективное планирование
    предоставляет широкие возможности для анализа существующих
    паттернов поведения. В своём стремлении улучшить пользовательский
    опыт мы упускаем, что активно развивающиеся страны третьего мира
    призваны к ответу.`,
  },
  {
    imgSrc: "assets/user.png",
    name: "Константин Константинополь",
    country: "Москва, Россия",
    text: `Каждый из нас понимает очевидную вещь: перспективное планирование
    предоставляет широкие возможности для анализа существующих
    паттернов поведения. В своём стремлении улучшить пользовательский
    опыт мы упускаем, что активно развивающиеся страны третьего мира
    призваны к ответу.`,
  },
  {
    imgSrc: "assets/user.png",
    name: "Константин Константинополь",
    country: "Москва, Россия",
    text: `Каждый из нас понимает очевидную вещь: перспективное планирование
    предоставляет широкие возможности для анализа существующих
    паттернов поведения. В своём стремлении улучшить пользовательский
    опыт мы упускаем, что активно развивающиеся страны третьего мира
    призваны к ответу.`,
  },
  {
    imgSrc: "assets/user.png",
    name: "Константин Константинополь",
    country: "Москва, Россия",
    text: `Каждый из нас понимает очевидную вещь: перспективное планирование
    предоставляет широкие возможности для анализа существующих
    паттернов поведения. В своём стремлении улучшить пользовательский
    опыт мы упускаем, что активно развивающиеся страны третьего мира
    призваны к ответу.`,
  },
  {
    imgSrc: "assets/user.png",
    name: "Константин Константинополь",
    country: "Москва, Россия",
    text: `Каждый из нас понимает очевидную вещь: перспективное планирование
    предоставляет широкие возможности для анализа существующих
    паттернов поведения. В своём стремлении улучшить пользовательский
    опыт мы упускаем, что активно развивающиеся страны третьего мира
    призваны к ответу.`,
  },
  {
    imgSrc: "assets/user.png",
    name: "Константин Константинополь",
    country: "Москва, Россия",
    text: `Каждый из нас понимает очевидную вещь: перспективное планирование
    предоставляет широкие возможности для анализа существующих
    паттернов поведения. В своём стремлении улучшить пользовательский
    опыт мы упускаем, что активно развивающиеся страны третьего мира
    призваны к ответу.`,
  },
  {
    imgSrc: "assets/user.png",
    name: "Константин Константинополь",
    country: "Москва, Россия",
    text: `Каждый из нас понимает очевидную вещь: перспективное планирование
    предоставляет широкие возможности для анализа существующих
    паттернов поведения. В своём стремлении улучшить пользовательский
    опыт мы упускаем, что активно развивающиеся страны третьего мира
    призваны к ответу.`,
  },
  {
    imgSrc: "assets/user.png",
    name: "Константин Константинополь",
    country: "Москва, Россия",
    text: `Каждый из нас понимает очевидную вещь: перспективное планирование
    предоставляет широкие возможности для анализа существующих
    паттернов поведения. В своём стремлении улучшить пользовательский
    опыт мы упускаем, что активно развивающиеся страны третьего мира
    призваны к ответу.`,
  },
  {
    imgSrc: "assets/user.png",
    name: "Константин Константинополь",
    country: "Москва, Россия",
    text: `Каждый из нас понимает очевидную вещь: перспективное планирование
    предоставляет широкие возможности для анализа существующих
    паттернов поведения. В своём стремлении улучшить пользовательский
    опыт мы упускаем, что активно развивающиеся страны третьего мира
    призваны к ответу.`,
  },
  {
    imgSrc: "assets/user.png",
    name: "Константин Константинополь",
    country: "Москва, Россия",
    text: `Каждый из нас понимает очевидную вещь: перспективное планирование
    предоставляет широкие возможности для анализа существующих
    паттернов поведения. В своём стремлении улучшить пользовательский
    опыт мы упускаем, что активно развивающиеся страны третьего мира
    призваны к ответу.`,
  },
  {
    imgSrc: "assets/user.png",
    name: "Константин Константинополь",
    country: "Москва, Россия",
    text: `Каждый из нас понимает очевидную вещь: перспективное планирование
    предоставляет широкие возможности для анализа существующих
    паттернов поведения. В своём стремлении улучшить пользовательский
    опыт мы упускаем, что активно развивающиеся страны третьего мира
    призваны к ответу.`,
  },
  {
    imgSrc: "assets/user.png",
    name: "Константин Константинополь",
    country: "Москва, Россия",
    text: `Каждый из нас понимает очевидную вещь: перспективное планирование
    предоставляет широкие возможности для анализа существующих
    паттернов поведения. В своём стремлении улучшить пользовательский
    опыт мы упускаем, что активно развивающиеся страны третьего мира
    призваны к ответу.`,
  },
  {
    imgSrc: "assets/user.png",
    name: "Константин Константинополь",
    country: "Москва, Россия",
    text: `Каждый из нас понимает очевидную вещь: перспективное планирование
    предоставляет широкие возможности для анализа существующих
    паттернов поведения. В своём стремлении улучшить пользовательский
    опыт мы упускаем, что активно развивающиеся страны третьего мира
    призваны к ответу.`,
  },
];

addReviews();

const reviews = document.querySelectorAll(".review");
const reviewPrevBtn = document.querySelector("#prev");
const reviewNextBtn = document.querySelector("#next");
const questionBtns = document.querySelectorAll(
  ".questions__list__item__button"
);
const questionTexts = document.querySelectorAll(".questions__list__item__text");
const reviewWidth = reviews[0].clientWidth;
const reviewListWidth = reviewList.clientWidth - 40;
const burger = document.querySelector(".header__burger");
const logo = document.querySelector(".logo");
const menu = document.querySelector(".menu");
const menuLink = document.querySelectorAll(".menu__list__item__link");
const dots = document.querySelectorAll(".reviews__dots__dot");

const form = document.querySelector(".formSection__form");

form.addEventListener("submit", handleFormSubmit);

function validateNumber(e) {
  e.target.value;
}

function handleFormSubmit(e) {
  e.preventDefault();
  const regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  const number = e.target[1].value;
  const valid = regex.test(number);
  e.target[0].value
    ? e.target[0].classList.add("formSection__form__input-valid")
    : e.target[0].classList.remove("formSection__form__input-error");
  if (!valid) {
    e.target[1].classList.add("formSection__form__input-error");
    return;
  }
  if (valid) {
    e.target[1].classList.remove("formSection__form__input-error");
    e.target[1].classList.add("formSection__form__input-valid");
  }

  alert(
    `Ваше имя: ${e.target[0].value} \nВаш телефон: ${
      e.target[1].value
    } \nВы согласились: ${e.target[2].value ? "Да" : "Нет"}`
  );
}

let currentPos = 0;
dots[0].classList.add("reviews__dots__dot--active");
reviewPrevBtn.classList.add("button--arrow--inactive");

reviewPrevBtn.addEventListener("click", () => moveReviewsBack());
reviewNextBtn.addEventListener("click", () => {
  moveReviewsForward();
});

burger.addEventListener("click", () => toggleBurger());

questionBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => showFAQ(index));
});
menuLink.forEach((link) => {
  link.addEventListener("click", () => toggleBurger());
});

function toggleBurger() {
  burger.classList.toggle("header__burger--active");
  logo.classList.toggle("logo--active");
  menu.classList.toggle("menu--active");
}

function moveReviewsBack() {
  if (currentPos < 1) return;

  reviewNextBtn.classList.remove("button--arrow--inactive");
  currentPos--;
  reviews.forEach((review) => {
    review.style.transform = `translateX(-${
      (reviewWidth + 32) * currentPos
    }px)`;
  });

  if (currentPos < 1) reviewPrevBtn.classList.add("button--arrow--inactive");
}

function moveReviewsForward() {
  if (currentPos >= 5) return;
  currentPos++;
  reviews.forEach((review) => {
    review.style.transform = `translateX(-${
      (reviewWidth + 32) * currentPos
    }px)`;
  });
  dots.forEach((dot) => {
    dot.classList.remove("reviews__dots__dot--active");
  });
  dots[currentPos].classList.add("reviews__dots__dot--active");
  reviewPrevBtn.classList.remove("button--arrow--inactive");
  if (currentPos >= 15) reviewNextBtn.classList.add("button--arrow--inactive");
}

function showFAQ(index) {
  questionTexts[index].classList.toggle("questions__list__item__text-active");
}

function addReviews() {
  mockReviews.forEach((review) => {
    const reviewContainer = document.createElement("div");
    reviewContainer.classList.add("review");

    const reviewHead = document.createElement("div");
    reviewHead.classList.add("review__head");

    const reviewHeadImg = document.createElement("img");
    reviewHeadImg.setAttribute("src", `${review.imgSrc}`);
    reviewHeadImg.classList.add("review__head__img");

    const reviewHeadUser = document.createElement("div");
    reviewHeadUser.classList.add("review__head__user");

    const reviewHeadUserName = document.createElement("h6");
    reviewHeadUserName.classList.add("headline", "headline_6");

    const reviewHeadUserLocation = document.createElement("p");
    reviewHeadUserLocation.classList.add("text", "text_12");

    const reviewText = document.createElement("p");
    reviewText.classList.add("text", "text_14", "review__text");

    reviewHeadUserName.textContent = review.name;
    reviewHeadUserLocation.textContent = review.country;
    reviewText.textContent = review.text;

    reviewHeadUser.append(reviewHeadUserName, reviewHeadUserLocation);
    reviewHead.append(reviewHeadImg, reviewHeadUser);

    reviewContainer.append(reviewHead, reviewText);

    reviewList.append(reviewContainer);
  });
}
