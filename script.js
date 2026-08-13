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
      var actionUrl = form.getAttribute("action") || "";

      if (actionUrl.indexOf("YOUR_FORM_ID") !== -1) {
        // Formspree not yet configured — show a friendly placeholder message.
        if (box) {
          box.textContent = "Thanks, " + name + "! (Form not fully connected yet — add your Formspree Form ID to start receiving these by email.)";
          box.style.display = "block";
        }
        form.reset();
        return;
      }

      fetch(actionUrl, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
        .then(function (response) {
          if (response.ok) {
            if (box) {
              box.textContent = "Thanks, " + name + "! Your message has been sent — we'll get back to you the same day.";
              box.style.display = "block";
            }
            form.reset();
          } else {
            if (box) {
              box.textContent = "Something went wrong sending your message. Please call or WhatsApp us instead.";
              box.style.display = "block";
            }
          }
        })
        .catch(function () {
          if (box) {
            box.textContent = "Something went wrong sending your message. Please call or WhatsApp us instead.";
            box.style.display = "block";
          }
        });
    });
  }
});
