// =========PURCHASE SLIDER=========

var swiper = new Swiper(".purchase__slider", {
  spaceBetween: 20,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  initialSlide: 1,
  // loop: "true",

  navigation: {
    nextEl: ".purchase__navigator-right",
    prevEl: ".purchase__navigator-left",
  },
});

// ==========ACCORDION VALUE=================

const accordion = document.querySelectorAll(".accordion__card");

accordion.forEach((selected) => {
  selected.addEventListener("click", () => {
    const accordionContainer = selected.querySelector(".accordion__content-container");
    const calcHeight = accordionContainer.scrollHeight;
    if (!accordionContainer.classList.contains("accordion__open")) {
      document.querySelectorAll(".accordion__content-container").forEach((check) => {
        check.classList.remove(".accordion__open");
        check.style.height = "0px";
      });

      accordionContainer.style.height = calcHeight + "px";

      accordionContainer.classList.add("accordion__open");
    } else {
      accordionContainer.style.height = "0px";
      accordionContainer.classList.remove("accordion__open");
    }
  });
});

// ============== ABOUT US ACCORDION ====================

const gardenAccordion = document.querySelectorAll(".accordion__garden-card");

gardenAccordion.forEach((current) => {
  const gardenImage = current.querySelector(".accordion__garden-image");
  const gardenDesc = current.querySelector(".accordion__garden-description");

  const changeSlide = function () {
    if (
      !current
        .querySelector(".accordion__garden-image")
        .classList.contains("accordion__garden-image-open")
    ) {
      gardenAccordion.forEach((remove) => {
        remove
          .querySelector(".accordion__garden-image")
          .classList.remove("accordion__garden-image-open");
        remove
          .querySelector(".accordion__garden-description")
          .classList.remove("accordion__garden-open");
        remove
          .querySelector(".accordion__garden-description")
          .classList.add("accordion__garden-close");
      });

      gardenImage.classList.add("accordion__garden-image-open");
      gardenDesc.classList.add("accordion__garden-open");
    }
  };

  current.addEventListener("mouseover", changeSlide);
});

// ============= NAV INDICATOR =================

const sections = document.querySelectorAll("section[id]");

sections.forEach((selected) => {
  const heightElement = selected.scrollHeight;
  const heightTop = selected.offsetTop;
  const whichId = selected.id;

  window.addEventListener("scroll", () => {
    // console.log(selected.id);
    if (scrollY > heightTop - 200 && scrollY < heightTop + heightElement - 200) {
      document
        .querySelector(`.nav__container a[href='#${whichId}']`)
        .classList.add("scrolled");
    } else {
      document
        .querySelector(`.nav__container a[href='#${whichId}']`)
        .classList.remove("scrolled");
    }
  });
});

// =================== SCROLL TOP APPEAR =================

window.addEventListener("scroll", () => {
  if (scrollY > 100) {
    document.querySelector(".nav__up").classList.add("nav__up-appear");
  } else {
    document.querySelector(".nav__up").classList.remove("nav__up-appear");
  }
});

//  =================== NAV BAR SCROLL =============== .nav__scrolled-down

window.addEventListener("scroll", () => {
  if (scrollY > 50) {
    document.querySelector("header").classList.add("nav__scrolled-down");
  } else {
    document.querySelector("header").classList.remove("nav__scrolled-down");
  }
});
