// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

const mainForm = document.querySelector("#main-form");
const submitBtn = document.querySelector("#submit-btn");
const clearBtn = document.querySelector("#clear-btn");
const fullName = document.querySelector("#fullName");
const favAnime = document.querySelector("#favAnime");
const email = document.querySelector("#email");
const textArea = document.querySelector("#textArea");
clearBtn.addEventListener("click", (event) => {
  fullName.value = "";
  email.value = "";
  favAnime.value = "";
  textArea.value = "";
});
