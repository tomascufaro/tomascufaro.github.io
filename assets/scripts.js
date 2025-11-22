document.addEventListener("DOMContentLoaded", () => {
  // Enable Bootstrap tooltips
  if (window.bootstrap && bootstrap.Tooltip) {
    const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
  }

  // Contact form (native validation + fetch)
  const contactForm = document.querySelector("#contactForm");
  if (contactForm) {
    const status = document.querySelector("#formStatus");
    const submitBtn = contactForm.querySelector("button[type='submit']");
    const hasValidEndpoint = contactForm.action && !contactForm.action.includes("your-form-id");

    contactForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;

      if (!hasValidEndpoint) {
        if (status) {
          status.className = "alert alert-warning";
          status.textContent = "Contact form not configured yet. Please set your Formspree endpoint.";
        }
        return;
      }

      const formData = new FormData(contactForm);

      // Honeypot field
      if (formData.get("website")) return;

      if (submitBtn) submitBtn.disabled = true;
      if (status) {
        status.className = "alert alert-info";
        status.textContent = "Sending...";
      }

      try {
        const response = await fetch(contactForm.action, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          if (status) {
            status.className = "alert alert-success";
            status.textContent = "Thanks for reaching out! I will get back to you shortly.";
          }
          contactForm.reset();
        } else {
          throw new Error("Request failed");
        }
      } catch (error) {
        if (status) {
          status.className = "alert alert-danger";
          status.textContent = "Sorry, something went wrong. Please email me directly.";
        }
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }
});
