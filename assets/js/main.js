var loginBtn = document.querySelector("#login-btn");
var registerBtn = document.querySelector("#register-btn");
var modal = document.querySelector(".modal");
var regiterModal = document.querySelector("#register");
var loginModal = document.querySelector("#login");
var modalOverlay = document.querySelector(".modal__overlay");
var modalSwitchBtn = document.querySelectorAll(".auth-form__switch-btn");
var likeBtn = document.querySelectorAll(".product-item-option-like");

console.log(likeBtn);

// loginBtn.addEventListener("click", function () {
//   modal.style.display = "flex";
//   loginModal.style.display = "block";
// });
// registerBtn.addEventListener("click", function () {
//   modal.style.display = "flex";
//   regiterModal.style.display = "block";
// });

modalOverlay.addEventListener("click", function (e) {
  modal.style.display = "none";
  regiterModal.style.display = "none";
  loginModal.style.display = "none";
});


for (i = 0; i < modalSwitchBtn.length; i++) {
  var switchBtn = modalSwitchBtn[i];
  switchBtn.addEventListener("click", function (e) {
    if (e.target.innerText === "Đăng nhập") {
      regiterModal.style.display = "none";
      loginModal.style.display = "block";
    } else {
      regiterModal.style.display = "block";
      loginModal.style.display = "none";
    }
  });
}
