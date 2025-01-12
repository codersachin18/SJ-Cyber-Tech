function showsidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function closesidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

function errorpass() {
  const password = document.getElementById("password").value;
  const repeatpassword = document.getElementById("repeat_password").value;
  const email = document.getElementById("email").value;

  if (!email.includes("@") || !email.includes(".")) {
    alert("Invalid email");
    return false;
  }

  if (password === repeatpassword) {
    document.getElementById("form").submit();
  } else {
    alert("Passwords do not match");
    return false;
  }
}

let currentSlide = 0;
const slides = document.querySelectorAll(".slide img");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

function nextbtn() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevbtn() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);

const box = document.querySelector(".box");

box.addEventListener("mouseover", changecolor);
box.addEventListener("mouseout", resetcolor);

function changecolor() {
  box.style.backgroundColor = "#080518";
}

function resetcolor() {
  box.style.backgroundColor = "rgba(59, 199, 241, 0.582)";
}

const loginpage = document.getElementById("login-page");
const login = document.getElementById("login").value;

function loginshow() {
  loginpage.showModal();
}

function lgnn() {
  const login = document.getElementById("login").value;

  if (!login.includes("@") || !login.includes(".")) {
    alert("Login Failed");
  } else {
    alert("Login Successful");
    window.location.href = "admin.html";
  }
}

function closelogin() {
  loginpage.close();
}

const srvs = document.querySelector(".s1");
const srvs2 = document.querySelector(".s2");
const srvs3 = document.querySelector(".s3");
const srvs4 = document.querySelector(".s4");

srvs.addEventListener("mouseover", cgcolor);
srvs.addEventListener("mouseout", rtcolor);

function cgcolor() {
  srvs.style.boxShadow = "2px 3px 10px 10px rgba(51, 216, 216, 0.64)";
}

function rtcolor() {
  srvs.style.boxShadow = "none";
}

srvs2.addEventListener("mouseover", cg2);
srvs2.addEventListener("mouseout", rt2);

function cg2() {
  srvs2.style.boxShadow = "2px 3px 10px 10px rgba(51, 216, 216, 0.64)";
}

function rt2() {
  srvs2.style.boxShadow = "none";
}

srvs3.addEventListener("mouseover", cg3);
srvs3.addEventListener("mouseout", rt3);

function cg3() {
  srvs3.style.boxShadow = "2px 3px 10px 10px rgba(51, 216, 216, 0.64)";
}

function rt3() {
  srvs3.style.boxShadow = "none";
}

srvs4.addEventListener("mouseover", cg4);
srvs4.addEventListener("mouseout", rt4);

function cg4() {
  srvs4.style.boxShadow = "2px 3px 10px 10px rgba(51, 216, 216, 0.64)";
}

function rt4() {
  srvs4.style.boxShadow = "none";
}
