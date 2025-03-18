document.addEventListener("DOMContentLoaded", function () {
  console.log("Website Loaded Successfully!");

  // Smooth Scroll Effect for Navbar Links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: "smooth",
        });
      }
    });
  });

  // Simple Alert on Button Click
  const button = document.querySelector(".btn-primary");
  if (button) {
    button.addEventListener("click", function () {
      alert("Welcome to My Website!");
    });
  }
});
