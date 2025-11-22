/*!
* Start Bootstrap - Clean Blog v5.1.0 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
(() => {
  "use strict";

  const body = document.body;

  const setFloatingState = (group, hasValue) => {
    group.classList.toggle("floating-label-form-group-with-value", hasValue);
  };

  // Initialize existing floating label states
  const floatingInputs = body.querySelectorAll(".floating-label-form-group input, .floating-label-form-group textarea");
  floatingInputs.forEach((input) => {
    const group = input.closest(".floating-label-form-group");
    if (group) {
      setFloatingState(group, !!input.value);
    }
  });

  // Floating label interactions
  body.addEventListener("input", (event) => {
    const group = event.target.closest(".floating-label-form-group");
    if (group) {
      setFloatingState(group, !!event.target.value);
    }
  });

  body.addEventListener("focusin", (event) => {
    const group = event.target.closest(".floating-label-form-group");
    if (group) {
      group.classList.add("floating-label-form-group-with-focus");
    }
  });

  body.addEventListener("focusout", (event) => {
    const group = event.target.closest(".floating-label-form-group");
    if (group) {
      group.classList.remove("floating-label-form-group-with-focus");
    }
  });

  const nav = document.getElementById("mainNav");
  const MQL = 992;

  // Primary navigation slide-in effect
  if (nav && window.innerWidth > MQL) {
    const headerHeight = nav.offsetHeight;
    let previousTop = 0;

    window.addEventListener("scroll", () => {
      const currentTop = window.scrollY;

      if (currentTop < previousTop) {
        if (currentTop > 0 && nav.classList.contains("is-fixed")) {
          nav.classList.add("is-visible");
        } else {
          nav.classList.remove("is-visible", "is-fixed");
        }
      } else if (currentTop > previousTop) {
        nav.classList.remove("is-visible");
        if (currentTop > headerHeight && !nav.classList.contains("is-fixed")) {
          nav.classList.add("is-fixed");
        }
      }

      previousTop = currentTop;
    });
  }
})();
