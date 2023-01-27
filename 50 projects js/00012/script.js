const toggleBtn = document.querySelectorAll(".faq-toggle");

toggleBtn.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
    //parentNode property of the Node interface returns the parent of the specified node
  });
});
