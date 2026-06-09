// dashboard.js
function showPage(pageId, element){
  const pages = document.querySelectorAll(".page");
  const links = document.querySelectorAll(".sidebar a");

  pages.forEach(page => page.classList.remove("active-page"));
  links.forEach(link => link.classList.remove("active"));

  document.getElementById(pageId).classList.add("active-page");
  element.classList.add("active");
}

function trackOrder(){
  const input = document.getElementById("trackInput").value;
  const result = document.getElementById("trackResult");

  if(input === ""){
    result.style.color = "#dc2626";
    result.innerText = "Please enter tracking ID";
  }else{
    result.style.color = "#15803d";
    result.innerText = "Shipment " + input + " is currently in transit and will be delivered soon.";
  }
}

function logout(){
  window.location.href = "index.html";
}