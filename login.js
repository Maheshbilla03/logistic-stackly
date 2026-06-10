function showSignup(){
  document.getElementById("loginBox").classList.remove("active");
  document.getElementById("signupBox").classList.add("active");
}

function showLogin(){
  document.getElementById("signupBox").classList.remove("active");
  document.getElementById("loginBox").classList.add("active");
}

function createAccount(){
  let name = document.getElementById("signupName").value.trim();
  let email = document.getElementById("signupEmail").value.trim();
  let phone = document.getElementById("signupPhone").value.trim();
  let password = document.getElementById("signupPassword").value.trim();

  if(name === "" || email === "" || phone === "" || password === ""){
    alert("Please fill all fields");
    return;
  }

  localStorage.setItem("userName", name);
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPhone", phone);
  localStorage.setItem("userPassword", password);

  alert("Account Created Successfully!");

  document.getElementById("signupName").value = "";
  document.getElementById("signupEmail").value = "";
  document.getElementById("signupPhone").value = "";
  document.getElementById("signupPassword").value = "";

  showLogin();
}

function loginAccount() {
  let email = document.getElementById("loginEmail").value.trim();

  let savedEmail = localStorage.getItem("userEmail");

  if (email === "") {
    alert("Please enter email");
    return;
  }

  if (email === savedEmail) {
    window.location.href = "das.html";
  } else {
    alert("Invalid Email");
  }
}