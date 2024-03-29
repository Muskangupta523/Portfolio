var icon = document.querySelector('.menu-icon'); // Selecting the menu icon
var cross = document.querySelector('.fa-times');
var menu = document.querySelector('.fa-bars');
var navList = document.querySelector('nav ul'); // Selecting the navigation list
var isOpen = false; // Variable to track if the navigation list is open or closed

icon.addEventListener('click', function() {
  toggle();
});

function toggle() {
  if (!isOpen) {
    navList.style.display = 'flex';
    menu.style.display = 'none';
    cross.style.display = 'block';
    // Adding a short delay before applying the transition to ensure it works properly
    setTimeout(function() {
      navList.style.transition = 'transform 0.3s ease-in-out'; // Adding transition
      navList.style.transform = 'translateX(0)'; // Apply transformation to trigger the transition
    }, 50);
    isOpen = true;
  } else {
    menu.style.display = 'block';
    cross.style.display = 'none';
    navList.style.transform = 'translateX(-100%)'; // Apply transformation to hide the list
    setTimeout(function() {
      navList.style.display = 'none'; // Hide the list after the transition is complete
    }, 300); // Adjust the timeout value to match the transition duration
    isOpen = false;
  }
}
