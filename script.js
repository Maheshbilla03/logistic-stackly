function showSignup(){
  document.getElementById("loginBox").classList.remove("active");
  document.getElementById("signupBox").classList.add("active");
}

function showLogin(){
  document.getElementById("signupBox").classList.remove("active");
  document.getElementById("loginBox").classList.add("active");
}