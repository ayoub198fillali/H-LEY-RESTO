let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header .navbar a");

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  section.forEach((sec) => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header .navbar a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

document.querySelector("#search-icon").onclick = () => {
  document.querySelector("#search-form").classList.toggle("active");
};

document.querySelector("#close").onclick = () => {
  document.querySelector("#search-form").classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
  setInterval(loader, 100);
}

window.onload = fadeOut;

// var jQueryScript = document.createElement("script");
// jQueryScript.setAttribute(
//   "src",
//   "https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"
// );
// document.head.appendChild(jQueryScript);

$(".dishes .box-container .box .fa-heart").each(function (index) {
  $(this).on("click", function (e) {
    e.preventDefault();
    console.log($(this)[0]);
    console.log("Case 1");
    myNotif("info", "La commende est ajouté dans les favoris", 20000);
    $(this).toggleClass("addedFav");
  });
});

$(".menu .box-container .box .image .fa-heart").each(function (index) {
  $(this).on("click", function (e) {
    e.preventDefault();

    console.log("Case 2");
    console.log($(this)[0]);
    $(this).toggleClass("addedFav2");
  });
});

function myNotif(type, msg, time = 1000) {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: time,
    timerProgressBar: true,
    customClass: "swal-wide",
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: type,
    title: msg,
  });
}

//
$("img").imagePopup({
  overlay: "rgba(0, 100, 0, 0.5)",

  closeButton: {
    src: "images/close.png",
    width: "40px",
    height: "40px",
  },
  imageBorder: "15px solid #ffffff",
  borderRadius: "10px",
  imageWidth: "500px",
  imageHeight: "400px",
  imageCaption: {
    exist: true,
    color: "#ffffff",
    fontSize: "40px",
  },
  open: function () {
    console.log("opened");
  },
  close: function () {
    console.log("closed");
  },
});
