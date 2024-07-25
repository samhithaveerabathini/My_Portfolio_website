/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    

};
/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset=sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                documet.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                
            });
        };
    });


    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*==================== scroll reveal ====================*/
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});
ScrollReveal().reveal('.home-content, .heading', {origin : 'top' });
ScrollReveal().reveal('.home-img, .skills-content, .projects-box, .certificate-box,.internships-box, .contact form', {origin : 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-image, .heading', {origin : 'left' });
ScrollReveal().reveal('.home-content p, .about-content p', {origin : 'right' });

/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['web Developer', 'Tech Enthusiast', 'Innovator'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
/*------contact section------*/
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent default form submission
  
      // Form validation
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();
  
      if (name === "" || email === "" || phone === "" || subject === "" || message === "") {
        alert("Please fill out all fields.");
        return;
      }
  
      if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      if (!validatePhone(phone)) {
        alert("Please enter a valid phone number.");
        return;
      }
  
      // If all validations pass, log form data to the console
      const formData = {
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message
      };
      console.log("Form Data Submitted:", formData);
  
      alert("Form submitted successfully!");
      form.reset();
    });
  
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  
    function validatePhone(phone) {
      const re = /^\d{10}$/;
      return re.test(phone);
    }
  });
  