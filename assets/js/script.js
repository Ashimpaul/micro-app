
  // Hero Slider functionality
  const heroSlides = document.querySelectorAll('#hero-slider > div');
  let currentHeroSlide = 0;

  // Rename this function to showHeroSlide to avoid conflict
  function showHeroSlide(index) {
     heroSlides.forEach((slide, i) => {
         slide.style.opacity = i === index ? '1' : '0';
     });
  }

  setInterval(() => {
     currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
     showHeroSlide(currentHeroSlide);
  }, 5000); // 5 seconds interval for the hero slider

  
  // Carousel Slider functionality
  let currentIndex = 0;
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  // Show the current carousel item
  function showCarouselSlide(index) {
    items.forEach((item, i) => {
      item.classList.add('hidden');
      if (i === index) {
        item.classList.remove('hidden');
      }
    });
  }

  // Show the next carousel slide
  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    showCarouselSlide(currentIndex);
  }

  // Show the previous carousel slide
  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    showCarouselSlide(currentIndex);
  }

  // Initial setup for carousel
  showCarouselSlide(currentIndex);

  // Event listeners for carousel controls
  document.getElementById('next').addEventListener('click', nextSlide);
  document.getElementById('prev').addEventListener('click', prevSlide);


  document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar-wrapper');
    const menuClose = document.getElementById('menu-close');
    const navbar = document.getElementById('main-navbar');

    // Toggle sidebar visibility and navbar hiding
    menuToggle.addEventListener('click', function () {
        sidebar.classList.toggle('translate-x-full');
        navbar.classList.add('hidden'); // Hide the navbar when the sidebar is open
    });

    // Close sidebar on button click
    menuClose.addEventListener('click', function () {
      sidebar.classList.add('translate-x-full');
  });
});
