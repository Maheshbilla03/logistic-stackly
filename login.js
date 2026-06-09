function showSignup(){
  document.getElementById("loginBox").classList.remove("active");
  document.getElementById("signupBox").classList.add("active");
}

function showLogin(){
  document.getElementById("signupBox").classList.remove("active");
  document.getElementById("loginBox").classList.add("active");
}
function createAccount(){
  let name = document.getElementById("signupName").value;
  let email = document.getElementById("signupEmail").value;
  let phone = document.getElementById("signupPhone").value;
  let password = document.getElementById("signupPassword").value;

  if(name === "" || email === "" || phone === "" || password === ""){
    alert("Please fill all fields");
    return;
  }

  localStorage.setItem("userName", name);
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPhone", phone);
  localStorage.setItem("userPassword", password);
  alert("Account created successfully!");

  window.location.href = "das.html";
}