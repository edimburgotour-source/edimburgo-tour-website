document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const button = form.querySelector("button[type='submit']");

    if (button) {
      button.textContent = "RICHIESTA INVIATA ✓";
      button.disabled = true;
    }
  });
});
