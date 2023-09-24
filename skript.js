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



function clearCookies() {
    // List of cookie names to clear
    const cookieNames = [
      'CONSENT',
      'HSID',
      'SSID',
      'APISID',
      'SAPISID',
      '__Secure-1PAPISID',
      'SID',
      '__Secure-1PSID',
      'OTZ',
      '1P_JAR',
      'SIDCC',
      '__Secure-1PSIDCC'
    ];
  
    // Loop through the cookie names and clear each one
    cookieNames.forEach((cookieName) => {
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.google.com; secure; samesite=None`;
    });
  }

  const clearButton = document.getElementById('clear-cookies-button');
  clearButton.addEventListener('click', clearCookies);



