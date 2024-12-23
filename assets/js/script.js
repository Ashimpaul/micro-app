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
