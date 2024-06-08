
const navbar = document.getElementsByTagName("nav")[0];




// code [0] menandakan hanya navbar pertama yang dipanggil

window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY > 1) {
    navbar.classList.replace("navbar-black", "nav-color");
  } else if (this.window.scrollY <= 0) {
    navbar.classList.replace("nav-color", "navbar-black");
  }
});

var $galleryContainer = $(".gallery").isotope({
  itemSelector: ".item",
  layoutMode: "fitRows",
  filter: ".featured",
});

$(".button-group .button").on("click", function () {
  $(".button-group .button").removeClass("active");
  $(this).addClass("active");

  var value = $(this).attr("data-filter");
  $galleryContainer.isotope({
    filter: value,
  });
});

const userCount = document.querySelector('.card_one h2');
let userCountValue = 0;

const accuracyCount = document.querySelector('.card_two h2');
let accuracyCountValue = 0;

const languageCount = document.querySelector('.card_three h2');
let languageCountValue = 0;

setInterval(() => {
  if (userCountValue < 90) {
    userCountValue++;
    userCount.textContent = userCountValue;
  }

  if (accuracyCountValue < 72) {
    accuracyCountValue++;
    accuracyCount.textContent = accuracyCountValue;
  }

  if (languageCountValue < 30) {
    languageCountValue++;
    languageCount.textContent = languageCountValue;
  }
}, 60);

document.addEventListener('DOMContentLoaded', function() {
  AOS.init();
});

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Show the success alert using SweetAlert
  Swal.fire({
    icon: 'success',
    title: 'Berhasil',
    text: 'Pesan Anda berhasil terkirim!',
    showConfirmButton: false,
    timer: 1500
  });
  

  // Optionally, clear the form
  this.reset();
});

function submitClick() {
  swal({
    title: "Pesan Terkirim",
    text: "Terima kasih telah menghubungi kami. Silahkan tunggu balasan kami di email Anda.",
    icon: "success",
    button: "Tutup",
  });
}





