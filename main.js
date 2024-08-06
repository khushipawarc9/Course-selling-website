document.addEventListener("DOMContentLoaded", () => {
  const enrollButtons = document.querySelectorAll(".btn-secondary");

  enrollButtons.forEach((button) => {
    button.addEventListener("click", () => {
      alert("Thank you for enrolling!");
    });
  });
});
