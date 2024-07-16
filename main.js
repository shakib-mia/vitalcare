AOS.init();

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  // console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

function createScrollDirectionTracker() {
  let scrollDirection = "up";
  let lastScrollY = 0;

  function handleScroll() {
    const currentScrollY = window.pageYOffset;

    if (currentScrollY > lastScrollY) {
      scrollDirection = "down";
    } else {
      scrollDirection = "up";
    }

    lastScrollY = currentScrollY;
    if (scrollDirection === "up") {
      // console.log(scrollDirection);
      document.getElementById("navbar-container").style.top = "0";
      document.getElementById("navbar-container").style.transition =
        "all 0.5s ease";
    } else {
      document.getElementById("navbar-container").style.top = "-10rem";
      document.getElementById("navbar-container").style.transition =
        "all 0.5s ease";
    }
  }
  // console.log(scrollDirection);

  window.addEventListener("scroll", handleScroll);

  return {
    getScrollDirection: () => scrollDirection,
    cleanup: () => {
      window.removeEventListener("scroll", handleScroll);
    },
  };
}

createScrollDirectionTracker();

const handleVideo = (checked) => {
  const iframe = document.querySelector("#video iframe");
  // console.log(iframe.src);

  if (checked) {
    iframe.src =
      "https://www.youtube.com/embed/xcJtL7QggTI?si=YN9q7bMgyNle6d7Z";
  } else {
    setTimeout(() => (iframe.src = ""), 1000);
  }
};

document
  .getElementById("video-check")
  .addEventListener("change", (e) => handleVideo(e.target.checked));

// Example checkIsInViewport function for testing
function checkIsInViewport(selector, callback) {
  const element = document.querySelector(selector);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      callback(entry.isIntersecting);
    });
  });
  observer.observe(element);
}

// Define an object to keep track of timer state for each element
const timerState = {
  value1: { timer: null, seconds: 0 },
  value2: { timer: null, seconds: 0 },
};

function startTimer(target, id, interval) {
  if (timerState[id].timer) {
    clearInterval(timerState[id].timer);
  }
  timerState[id].seconds = 0;
  timerState[id].timer = setInterval(() => {
    if (timerState[id].seconds < target) {
      timerState[id].seconds++;
      document.getElementById(id).innerText =
        timerState[id].seconds > 0 ? timerState[id].seconds : 0;
    } else {
      clearInterval(timerState[id].timer);
    }
  }, interval);
}

checkIsInViewport("#value1", (isInViewPort) => {
  if (isInViewPort) {
    startTimer(25, "value2", 100);
    startTimer(573, "value1", 0.000001);
  } else {
    clearInterval(timerState.value1.timer);
    clearInterval(timerState.value2.timer);
    document.getElementById("value1").innerText = 0;
    document.getElementById("value2").innerText = 0;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper-container", {
    // slidesPerView: 2,
    autoplay: true,
    // spaceBetween: 68,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        // spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        // spaceBetween: 50,
      },
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  });
});

const date = new Date();

// console.log(date.getFullYear());
document.getElementById("year").innerText = date.getFullYear();
