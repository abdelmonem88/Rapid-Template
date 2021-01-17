//show navlinks on small and medium screens
const navToggler = document.querySelector(".nav-toggler");
const linksContainer = document.querySelector(".links-container");
const navLinks = document.querySelectorAll(".nav-link");
const goToTop = document.querySelector(".goToTop");
const sideBar = document.querySelector("#side-bar");
const aside = document.querySelector("aside");
const closeIcon = document.querySelector(".close");
const asideLinks = document.querySelectorAll(".side-link");

navToggler.addEventListener("click", () => {
  sideBar.classList.toggle("show");
  aside.classList.toggle("show");
});

closeIcon.addEventListener("click", () => {
  sideBar.classList.toggle("show");
  aside.classList.toggle("show");
});

//close sidebar while click on sidelinks
asideLinks.forEach((asideLink) => {
  asideLink.addEventListener("click", (e) => {
    sideBar.classList.remove("show");
  });
});

//fixed nav
const navTop = document.getElementById("nav-top");
const header = document.querySelector("header");

window.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 100) {
    navTop.classList.add("hide");
    header.classList.add("fixed");
    goToTop.classList.add("showBtn");
  } else {
    navTop.classList.remove("hide");
    header.classList.remove("fixed");
    goToTop.classList.remove("showBtn");
  }
});

window.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 600) {
    goToTop.classList.add("showBtn");
  } else {
    goToTop.classList.remove("showBtn");
  }
});

//animated counters
window.addEventListener("scroll", (e) => {
  const counters = document.querySelectorAll(".counter");
  const speed = 200;
  const whyUsSection = document.getElementById("why-us");
  const whyUsSectionTop = whyUsSection.getBoundingClientRect().top;

  if (whyUsSectionTop < -150) {
    counters.forEach((counter) => {
      const updateCounters = () => {
        const target = parseInt(counter.getAttribute("data-target"));
        const count = parseInt(counter.innerText);
        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCounters, 30);
        } else {
          counter.innerText = target;
        }
      };

      updateCounters();
    });
  }
});

//filter portfolio images
const imagesContainer = document.querySelector(".images");
const imagesFilters = document.querySelectorAll(".filter-btn");
const imageWrappers = document.querySelectorAll(".image-wrapper");

imagesContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("filter-btn")) {
    const value = e.target.getAttribute("data-filter");
    //add active class to active btn
    imagesFilters.forEach((imageFilter) => {
      imageFilter.classList.remove("active-btn");
    });
    e.target.classList.add("active-btn");

    //show and hide images
    imageWrappers.forEach((imageWrapper) => {
      if (
        imageWrapper.classList.contains(value) ||
        e.target.getAttribute("data-filter") === "all"
      ) {
        imageWrapper.classList.add("show");
        imageWrapper.classList.remove("hide");
      } else {
        imageWrapper.classList.add("hide");
        imageWrapper.classList.remove("show");
      }
    });
  }
});

//owl carusal for testimonial section
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
  });
});

//owl carusal for clients section
$(".clients-container.owl-carousel").owlCarousel({
  margin: 25,
  loop: true,
  items: 6,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 4,
    },
    991: {
      items: 6,
    },
  },
});

//sync navlinks with section to add active class
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionID = section.getAttribute("id");
    if (window.scrollY > sectionTop - 50) {
      navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
        if (navLink.getAttribute("href") === `#${sectionID}`) {
          navLink.classList.add("active");
        }
      });
    }
  });
});

//sync sidelinks with section to add active class
window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionID = section.getAttribute("id");
    if (window.scrollY > sectionTop - 50) {
      asideLinks.forEach((sidelink) => {
        sidelink.classList.remove("active");
        if (sidelink.getAttribute("href") === `#${sectionID}`) {
          sidelink.classList.add("active");
        }
      });
    }
  });
});

linksContainer.addEventListener("click", (e) => {
  navLinks.forEach((navLink) => {
    navLink.classList.remove("active");
  });
  e.target.classList.add("active");
});

//questions section accordion
const questions = document.querySelectorAll(".question");
const allAnswerWrappers = document.querySelectorAll(".answer-wrapper");
const allQuestionsText = document.querySelectorAll(".question-text");
const allPlusIcons = document.querySelectorAll(".plus-icon");
const allMinusIcons = document.querySelectorAll(".minus-icon");

questions.forEach((question) => {
  question.addEventListener("click", (e) => {
    const answerWrapper = question.nextElementSibling;
    let answerWrapperHeight = answerWrapper.getBoundingClientRect().height;
    const answer = question.nextElementSibling.firstElementChild;
    const answerHeight = answer.getBoundingClientRect().height;
    const questionText = question.firstElementChild;
    const plusIcon = question.querySelector(".plus-icon");
    const minusIcon = question.querySelector(".minus-icon");

    allAnswerWrappers.forEach((singleWrapper) => {
      singleWrapper.style.height = "0px";
    });

    allQuestionsText.forEach((questionText) => {
      questionText.classList.remove("blue");
    });

    allPlusIcons.forEach((plusIcon) => {
      plusIcon.style.display = "block";
    });

    allMinusIcons.forEach((minusIcon) => {
      minusIcon.style.display = "none";
    });

    if (answerWrapperHeight === 0) {
      answerWrapper.style.height = `${answerHeight}px`;
      questionText.classList.add("blue");
      plusIcon.style.display = "none";
      minusIcon.style.display = "block";
    } else {
      answerWrapper.style.height = "0px";
      questionText.classList.remove("blue");
      plusIcon.style.display = "block";
      minusIcon.style.display = "none";
    }
  });
});
