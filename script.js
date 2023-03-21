// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Form submission

document.addEventListener("DOMContentLoaded", function () {
  // Get the form element
  const form = document.getElementById("contact-form");

  // Add event listener to the form
  form.addEventListener("submit", function (event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get the form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Construct the mailto link
    const mailtoLink =
      "mailto:youremail@example.com" +
      "?subject=New contact form submission" +
      "&body=Name: " +
      encodeURIComponent(name) +
      "%0D%0AEmail: " +
      encodeURIComponent(email) +
      "%0D%0AMessage: " +
      encodeURIComponent(message);

    // Open the user's email client with the mailto link
    window.location.href = mailtoLink;
  });
});
