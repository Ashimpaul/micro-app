//sidebar
document.addEventListener("DOMContentLoaded", () => {
  const menuToggleButton = document.getElementById("menu-toggle"); // Hamburger Menu
  const menuCloseButton = document.getElementById("menu-close");  // Close Button
  const sidebar = document.getElementById("sidebar-wrapper");     // Sidebar

  // Toggle Sidebar (Open Menu)
  menuToggleButton.addEventListener("click", () => {
    sidebar.classList.remove("translate-x-full"); // Show Sidebar
    sidebar.classList.add("translate-x-0");
  });

  // Close Sidebar
  menuCloseButton.addEventListener("click", () => {
    sidebar.classList.remove("translate-x-0");    // Hide Sidebar
    sidebar.classList.add("translate-x-full");
  });
});



//cookies
document.addEventListener("DOMContentLoaded", function () {
 const popup = document.getElementById("cookiePopup");
 const acceptBtn = document.getElementById("acceptCookies");
 const rejectBtn = document.getElementById("rejectCookies");

 // Show the popup after a slight delay
 setTimeout(() => {
   popup.style.display = "block";
 }, 1000);

 acceptBtn.addEventListener("click", () => {
   popup.style.display = "none";
   alert("You accepted cookies!");
   // Save consent in local storage or cookies
   localStorage.setItem("cookieConsent", "accepted");
 });

 rejectBtn.addEventListener("click", () => {
   popup.style.display = "none";
   alert("You rejected cookies!");
   // Save rejection in local storage or cookies
   localStorage.setItem("cookieConsent", "rejected");
 });

 // Check for existing consent
 const cookieConsent = localStorage.getItem("cookieConsent");
 if (cookieConsent) {
   popup.style.display = "none";
 }
});



 //map
 function showMap() {
 const mapIframe = document.getElementById('map');
 mapIframe.src = "https://www.google.com/maps/search/Micro+Store+near+me"; // Use general search URL
 mapIframe.classList.remove('hidden'); // Show the map
}


