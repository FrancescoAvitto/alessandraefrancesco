document.addEventListener("scroll", function () {
  const navbar = document.querySelector("#navbar");
  const navbarBoxLogo = document.querySelector("#navbar-box-logo");
  if (window.scrollY > 200) {
    navbar.classList.add("bg-white-transparent");
    navbarBoxLogo.classList.add("hidden");
  } else {
    navbar.classList.remove("bg-white-transparent");
    navbarBoxLogo.classList.remove("hidden");
  }
});

// countdown

function timeout() {
  // timer
  const final = new Date(2024, 8, 14);
  // const message = document.querySelector("#message");
  const giorniMancanti = document.querySelector("#giorniMancanti");
  const oreMancanti = document.querySelector("#oreMancanti");
  const minutiMancanti = document.querySelector("#minutiMancanti");
  const secondiMancanti = document.querySelector("#secondiMancanti");
  function timer() {
    const today = new Date();
    const diff = final - today;
    if (diff > 0) {
      const secondi = Math.floor((diff / 1000) % 60);
      const minuti = Math.floor((diff / (1000 * 60)) % 60);
      const ore = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const giorni = Math.floor(diff / (1000 * 60 * 60 * 24));
      giorniMancanti.innerHTML = giorni < 10 ? "0" + giorni : giorni;
      oreMancanti.innerHTML = ore < 10 ? "0" + ore : ore;
      minutiMancanti.innerHTML = minuti < 10 ? "0" + minuti : minuti;
      secondiMancanti.innerHTML = secondi < 10 ? "0" + secondi : secondi;
    } else {
      message.innerHTML = "Tempo scaduto!";
      // giorniMancanti.innerHTML = "00";
      // oreMancanti.innerHTML = "00";
      // minutiMancanti.innerHTML = "00";
      // secondiMancanti.innerHTML = "00";
    }
  }
  setInterval(timer, 1000);
}

timeout();

// infinite scrolling metodo 1

// let photoWrapper = document.querySelector("#photoWrapper");

// for (let i = 1; i <= 100; i++) {
//   let photo = document.createElement("div");
//   photo.innerHTML = ` <div class="relative mb-4 m-3" >
//   <div class="overflow-hidden">
//     <img class="w-full rounded-md hover:scale-[1.10] duration-[400ms]" src="./media/img/${i}.jpg">
//     </div>
//     </div>`;

//   photoWrapper.appendChild(photo);
// }

// infinite scrolling metodo 2

// function generateImageFilesArray(start, end) {
//   const imageFiles = [];

//   for (let i = start; i <= end; i++) {
//     const filename = `${i}.jpg`;
//     imageFiles.push(filename);
//   }

//   return imageFiles;
// }

// const imageFiles = generateImageFilesArray(1, 160);

// const card = document.querySelector(".card");
// const box = document.querySelector(".box");
// const imageFolder = "/media/img/";
// let currentImageIndex = 0;
// const imagesPerBatch = 8;

// function renderImages() {
//   for (let i = 0; i < imagesPerBatch; i++) {
//     if (currentImageIndex < imageFiles.length) {
//       const img = document.createElement("img");
//       img.src = imageFolder + imageFiles[currentImageIndex];
//       card.appendChild(img);
//       currentImageIndex++;
//       // Verifica se hai mostrato tutte le immagini.

//       if (currentImageIndex >= imageFiles.length) {
//         console.log(imageFiles.length);
//         box.classList.add("hidden");
//         break;
//       }
//     }
//   }
// }

const loader = document.querySelector(".loader9");
const card = document.querySelector(".card");
const imagesPerBatch = 10;
let currentImageIndex = 0;
const imagesToDisplay = [];
const imageFolder = "./media/img/";

function generateImageFilesArray(start, end) {
  const imageFiles = [];

  for (let i = start; i <= end; i++) {
    const filename = `${i}.jpg`;
    imageFiles.push(filename);
  }

  return imageFiles;
}
const imageFiles = generateImageFilesArray(1, 100);

function renderImages() {
  for (let i = 0; i < imagesPerBatch; i++) {
    if (currentImageIndex < imageFiles.length) {
      imagesToDisplay.push(imageFiles[currentImageIndex]);
      currentImageIndex++;

      if (currentImageIndex >= imageFiles.length) {
        loader.classList.add("hidden");
        break;
      }
    }
  }

  card.innerHTML = "";

  imagesToDisplay.forEach((imageFile) => {
    const img = document.createElement("div");
    img.innerHTML = `<div class="relative mb-4 m-3" >
      <div class="overflow-hidden">
       <img class="w-full rounded-md hover:scale-[1.10] duration-[400ms] overflow-hidden" src="${
         imageFolder + imageFile
       }">
      </div>
      </div>`;
    card.appendChild(img);
  });
}

window.onscroll = () => {
  const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

  if (scrollTop + clientHeight + 1 >= scrollHeight) {
    loader.classList.add("show");
    renderImages();
  } else {
    loader.classList.remove("show");
  }
};

// // animate on scroll
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
