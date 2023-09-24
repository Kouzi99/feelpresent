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
            displayMessage("Email sent successfully!", "success");
            }, function(error) {
            // Display an error message
            displayMessage("Email could not be sent. Please try again later.", "error");
            });
});

// Function to display messages
function displayMessage(message, messageType) {
  const messageContainer = document.getElementById("message-container");
  messageContainer.textContent = message;

  if (messageType === "success") {
      messageContainer.style.color = "green";
  } else if (messageType === "error") {
      messageContainer.style.color = "red";
  }

  // Clear the message after a few seconds (optional)
  setTimeout(function() {
      messageContainer.textContent = "";
  }, 5000); // Clear message after 5 seconds
}
// Function to send an autoresponder email
function sendAutoresponder(emailAddress) {
    const templateParams = {
        to_email: emailAddress,
        subject: "Thank you for contacting us!",
        message: "This is an automated response to confirm that we have received your message."
    };

    emailjs.send('your_email_service', 'your_template_id', templateParams)
        .then(function(response) {
            console.log('Autoresponder email sent:', response);
        })
        .catch(function(error) {
            console.error('Autoresponder email error:', error);
        });
}

// Example code to trigger the autoresponder when a user submits a contact form
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the user's email address from the form
    const emailAddress = document.getElementById('email').value;

    // Send the autoresponder email
    sendAutoresponder(emailAddress);

    // Additional code to handle form submission and other actions
});
document.cookie = "myCookie=myValue; SameSite=None; Secure";








