const loginForm = document.getElementById("login");
const nameBox = document.getElementById("name");
const button = document.getElementById("button");
const hello = document.getElementById("hello");

loginForm.addEventListener("submit", paintHello);

function paintHello(event) {
  event.preventDefault();
  const nameValue = nameBox.value;
  nameBox.value = "";
  localStorage.setItem("nickname", nameValue);
  hello.innerText = `Hello, ${nameValue}`;
  hello.classList.remove("hidden");
  loginForm.classList.add("hidden");
}

const savedUserName = localStorage.getItem("nickname");

if (savedUserName === null) {
  loginForm.classList.remove("hidden");
} else {
  hello.classList.remove("hidden");
  hello.innerText = `Hello ${savedUserName}`;
}
