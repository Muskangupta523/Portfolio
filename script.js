// JavaScript code to add the menu icon dynamically

window.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelector('.nav-links');
    const menuBar = navLinks.querySelector('.menu-bar');

    function addMenuIcon() {
        const menuIcon = document.createElement('i');
        menuIcon.classList.add('fa', 'fa-bars', 'menu-icon');
        menuIcon.setAttribute('aria-hidden', 'true');
        menuBar.prepend(menuIcon);
    }

    function removeMenuIcon() {
        const menuIcon = menuBar.querySelector('.menu-icon');
        if (menuIcon) {
            menuIcon.remove();
        }
    }

    function toggleMenu() {
        menuBar.classList.toggle('active');
    }

    // Add the menu icon when the screen width is less than 500px
    function handleResize() {
        if (window.innerWidth <= 500) {
            addMenuIcon();
        } else {
            removeMenuIcon();
        }
    }

    // Event listener for menu icon click to toggle the menu
    navLinks.addEventListener('click', function(event) {
        if (event.target.classList.contains('menu-icon')) {
            toggleMenu();
        }
    });

    // Event listener for window resize to handle dynamic menu icon addition/removal
    window.addEventListener('resize', handleResize);

    // Initial call to handle menu icon on page load
    handleResize();
});
