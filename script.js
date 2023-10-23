// countdown

function timeout() {
  // timer
  const final = new Date(2024, 9, 14);
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

let photoWrapper = document.querySelector("#photoWrapper");
console.log(photoWrapper);

for (let i = 1; i <= 162; i++) {
  let photo = document.createElement("div");
  photo.innerHTML = ` <div class="relative mb-4 m-3">
  <div class="overflow-hidden">
    <img class="w-full rounded-md hover:scale-[1.10] duration-[400ms]" src="./media/img/${i}.jpg">
    </div>
    </div>`;

  photoWrapper.appendChild(photo);
}
