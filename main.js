AOS.init();

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
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
