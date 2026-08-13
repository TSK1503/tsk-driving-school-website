document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
  }

  var form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.querySelector("#first-name").value || "there";
      var box = document.querySelector("#form-success");
      if (box) {
        box.textContent = "Thanks, " + name + "! Your message has been noted. (This is a demo form — connect it to your email or a form service like Formspree to go live.)";
        box.style.display = "block";
      }
      form.reset();
    });
  }
});
