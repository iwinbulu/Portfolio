// menuToggle
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

// backgroundOpacity
$(window).scroll(function () {
  let content = $(".bg-image");
  let scrollTop = $(window).scrollTop();
  content.css("opacity", 0.8 - scrollTop / 500);
});

// navBarBackground
const navEl = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 56) {
    navEl.classList.add("navbar-scrolled");
  } else if (window.scrollY < 56) {
    navEl.classList.remove("navbar-scrolled");
  }
});

// contactForm
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxL9SX0OrQbu3OR8cbKcS6DA51HcvNp2Bso4Of_FWkqCVYKpwN4YjBKhnk_KDGEKS6D/exec";
const form = document.forms["iwinBulu()-Contact-Form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Ketika tombol submit diklik
  btnKirim.classList.toggle("d-none");

  // Tampilkan tombol loading, hilangkan tombol kirim
  btnLoading.classList.toggle("d-none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // Ketika tombol submit diklik
      btnKirim.classList.toggle("d-none");

      // Tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle("d-none");

      // Tampilkan alert
      myAlert.classList.toggle("d-none");

      // Reset form
      form.reset();
      console.log("Success!", response);
    })

    .catch((error) => console.error("Error!", error.message));
});
