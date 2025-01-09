// Select menu toggle button, sidebar, and close button
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const sidebarWrapper = document.getElementById('sidebar-wrapper');

// Open sidebar
menuToggle.addEventListener('click', () => {
  sidebarWrapper.classList.remove('translate-x-full'); // Slide in
});

// Close sidebar
menuClose.addEventListener('click', () => {
  sidebarWrapper.classList.add('translate-x-full'); // Slide out
});

// Optional: Close the sidebar when clicking outside of it
document.addEventListener('click', (event) => {
  if (!sidebarWrapper.contains(event.target) && !menuToggle.contains(event.target)) {
    sidebarWrapper.classList.add('translate-x-full');
  }
});


function showMap() {
  const mapIframe = document.getElementById('map');
  mapIframe.src = "https://www.google.com/maps/search/Micro+Store+near+me"; // Use general search URL
  mapIframe.classList.remove('hidden'); // Show the map
}

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


import { database } from './firebase-config.js';
import { ref, push, set } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

document.getElementById('microstoreForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = event.target.name.value;
  const email = event.target.email.value;
  const contact = event.target.contact.value;
  const message = event.target.message.value;

  console.log(name, email, contact, message); // Debug

  try {
    const submissionsRef = ref(database, 'submissions');
    const newSubmissionRef = push(submissionsRef);
    await set(newSubmissionRef, { name, email, contact, message });
    alert("Form submitted successfully!");
    event.target.reset();
  } catch (error) {
    console.error("Error submitting form: ", error);
    alert("Error submitting form. Please try again.");
  }
});
