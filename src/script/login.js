let username = document.getElementById("username").value;
let password = document.getElementById("password").value;
let Error = document.getElementById("Error");
const submit = document.getElementById("submit");
const form = document.getElementById("form");
name_user = username;
password_user = password;

let name_user = "fatemeh";
let password_user = "ftm1234";
Error = "";

submit.addEventListener("click", submit());
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

sessionStorage.setItem("username", username);
sessionStorage.setItem("password", password);

function submit() {
  if (username != name_user) {
    Error.textContent = "Enter the correct username!";
  }
  if (password != password_user) {
    Error.textContent = "Enter the correct password!";
  }
  if (password == password_user && username == name_user) {
    window.location.href = "../../index.html";
  }
}
submit();

function setInput() {
  let name = sessionStorage.getItem("name");
  let password = sessionStorage.getItem("password");

  document.getElementById("name").value = name;
  document.getElementById("password").value = password;

}
setInput()