let name = localStorage.getItem("userName") || "User";
let email = localStorage.getItem("userEmail") || "user@gmail.com";
let phone = localStorage.getItem("userPhone") || "0000000000";

const dashboardName = document.getElementById("dashboardName");
const dashboardEmail = document.getElementById("dashboardEmail");
const dashboardPhone = document.getElementById("dashboardPhone");
const profileLetters = document.getElementById("profileLetters");

if(dashboardName) dashboardName.innerText = name;
if(dashboardEmail) dashboardEmail.innerText = email;
if(dashboardPhone) dashboardPhone.innerText = phone;
if(profileLetters) profileLetters.innerText = name.substring(0,2).toUpperCase();

const settingsName = document.getElementById("settingsName");
const settingsEmail = document.getElementById("settingsEmail");
const settingsPhone = document.getElementById("settingsPhone");

if(settingsName) settingsName.innerText = name;
if(settingsEmail) settingsEmail.innerText = email;
if(settingsPhone) settingsPhone.innerText = phone;

function showPage(pageId, element){
  document.querySelectorAll(".page").forEach(page=>{
    page.classList.remove("active-page");
  });

  document.getElementById(pageId).classList.add("active-page");

  document.querySelectorAll(".sidebar a").forEach(link=>{
    link.classList.remove("active");
  });

  element.classList.add("active");

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
}

function trackOrder(){
  let input = document.getElementById("trackInput");
  let result = document.getElementById("trackResult");

  if(input.value.trim() === ""){
    result.innerText = "Please enter Tracking ID";
    result.style.color = "red";
    return;
  }

  result.innerText = "Tracking ID " + input.value + " is currently In Transit 🚚";
  result.style.color = "#16a34a";
}

function logout(){
  window.location.href = "404.html";
}

/* Scroll Buttons */
const scrollTopBtn = document.getElementById("scrollTopBtn");
const scrollBottomBtn = document.getElementById("scrollBottomBtn");

scrollTopBtn.addEventListener("click", function(){
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
});

scrollBottomBtn.addEventListener("click", function(){
  window.scrollTo({
    top:document.documentElement.scrollHeight,
    behavior:"smooth"
  });
});