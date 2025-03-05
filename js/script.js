// Define the observer and its options
var observerOptions = {
  root: null, // observing the document's viewport
  threshold: 0.5 // trigger when at least 50% of the target is visible
};

var observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      // Initialize Swiper with autoplay when the target is visible
      var swiper = new Swiper(".slide-content", {
        slidesPerView: 3,
        spaceBetween: 25,
        loop: true,
        centerSlide: 'true',
        fade: 'true',
        grabCursor: 'true',
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        breakpoints:{
            0: {
                slidesPerView: 1,
            },
            520: {
                slidesPerView: 2,
            },
            950: {
                slidesPerView: 3,
            },
        },
      });
      // Stop observing after initialization
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Start observing the team container
observer.observe(document.querySelector('.slide-container'));

var buttons = document.querySelectorAll('.emailButton');

    // Loop through each button and add a click event listener
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Get the recipient email address from the data-email attribute
            var recipientEmail = this.getAttribute('data-email');
            // Create the mailto link with the recipient email address
            var mailtoLink = "mailto:" + recipientEmail;
            // Open the default email client with the pre-filled email
            window.location.href = mailtoLink;
        });
    });
    const linkedinButtons = document.querySelectorAll('.linkedin-button');

    // Add click event listener to each button
    linkedinButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Get the LinkedIn profile URL from the custom data attribute "data-profile-url"
        const profileUrl = this.getAttribute('data-profile-url');
        // Redirect to the LinkedIn profile URL
        window.location.href = profileUrl;
      });
    });
    