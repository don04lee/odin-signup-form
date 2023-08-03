let submit = document.querySelector(".submit-button");

let password = document.querySelector("#password");
let confirm = document.querySelector("#confirm");

submit.addEventListener('click', function(e) {
  if(password.value != confirm.value) {
    password.classList.add("error");
    confirm.classList.add("error");
  }
  else {
    password.classList.remove("error");
    confirm.classList.remove("error");
  }
});