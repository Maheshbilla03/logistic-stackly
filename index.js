// window.addEventListener("load", () => {
//   document.querySelector(".logo-box").style.transform = "scale(1)";
// });
// function toggleMenu() {
//   document.getElementById("navLinks").classList.toggle("active");
// }

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

/* Close mobile menu when clicking any nav link */
const navItems = document.querySelectorAll("#navLinks a");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("active");
  });
});

/* Track button */
const trackBtn = document.querySelector(".track-btn");
const trackInput = document.getElementById("trackInput");
const trackResult = document.getElementById("trackResult");

if (trackBtn) {
  trackBtn.addEventListener("click", function (e) {
    if (trackInput.value.trim() === "") {
      e.preventDefault();
      trackResult.textContent = "Please enter your tracking ID.";
      trackResult.style.color = "red";
    }
  });
}