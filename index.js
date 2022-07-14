// let slidePosition = 0;
// const slides = document.getElementsByClassName("carousel-items");
// const totalSlides = slides.length;
// // console.log(totalSlides);

// document
//   .getElementById("carousels-button-next")
//   .addEventListener("click", function () {
//     moveToNextSlide();
//     // console.log("tralala");
//   });

// document
//   .getElementById("carousels-button-prev")
//   .addEventListener("click", function () {
//     moveToPrevSlide();
//     // console.log("tralala");
//   });

// function moveToNextSlide() {
//   console.log("hello next");
// }
// function moveToPrevSlide() {
//   console.log("hello prev");
// }

// document.addEventListener('')
// const form = document.getElementById("form");
// form.addEventListener("submit", formSend);
// async function formSend(e) {
//   e.preventDefault();
//   let error = formValidate(form);
//   let formData = new FormData(form);
//   form.classList.add("_sending");
//   let response = await fetch("sendMail.php", {
//     method: "get",
//     body: formData,
//   });
//   if (response.ok) {
//     let result = await response.json();
//     alert(result.message);
//     form.reset();
//     // form.classList.remove("_sending");
//     alert("++");
//   } else {
//     alert("error");
//   }
// }

// function formValidate(form) {
//   let formReq = document.querySelectorAll("._req");
//   for (let index = 0; index < formReq.length; index++) {
//     const input = formReq[index];
//   }
// }
