   //show and hide dropdown list item on button click
   function show_hide() {
    var click = document.getElementById("list-items");
    if (click.style.display === "none" ) {
      click.style.display = "block"; 
      
      
    } else {
       click.style.display = "none"; 
       
    }
 }



/* Loader */
 window.addEventListener('load', () => {
  const loaderWrapper = document.querySelector('.loader-wrapper');
  loaderWrapper.style.display = 'none';
});
/* animated hamburger */
const menuIcon = document.getElementById('menuIcon');
const bars = document.querySelectorAll('.bar');

let isOpen = false;

menuIcon.addEventListener('click', () => {
    if (isOpen) {
        // Close the menu (reset bars)
        bars[0].style.transform = '';
        bars[1].style.opacity = '1';
        bars[2].style.transform = '';

        bars.forEach(bar => bar.classList.remove('shadow'));
    } else {
        // Open the menu (transform bars)
        bars[0].style.transform = 'rotate(45deg) translate(1vw, 3.2vw)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(-45deg) translate(1vw, -3.2vw)';

        bars.forEach(bar => bar.classList.add('shadow'));
    }

    isOpen = !isOpen;
});


/* Email sender  */

// Initialize Email.js with your User ID
emailjs.init("XZpi9scatTPgKf54Q"); // Replace with your actual User ID

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    emailjs.sendForm("service_qj1lrc2", "template_yegir0h", this)
          .then(function(response) {
          // Display a success message
            
            window.alert("Email byl odeslán, děkuji. Brzy se ozvu.");
            event.target.reset();
            }, function(error) {
            // Display an error message
            window.alert("Omlouvám se, něco se nepovedlo.");
            });
});


/* animation on scroll */
// Function to check if an element is in the viewport
function isElementInViewport(element, offset) {
  var rect = element.getBoundingClientRect();
  return (
      rect.top + offset >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll animations
function handleScrollAnimations() {
  var elements = document.querySelectorAll('.animate-on-scroll');
  var offset = -80; // Posun spouštěcího bodu o 50px nahoru

  elements.forEach(function (element) {
      if (isElementInViewport(element, offset)) {
          element.classList.add('animate');
      } else {
          element.classList.remove('animate');
      }
  });
}

// Listen for the scroll event and trigger animations
window.addEventListener('scroll', handleScrollAnimations);

// Trigger animations on page load
handleScrollAnimations();
