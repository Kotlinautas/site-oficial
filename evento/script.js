const cards = document.querySelectorAll(".scheduleItem");

cards.forEach((card) => {
  card.addEventListener("click", (el) => {
    const descriptions = document.querySelectorAll(
      `.description-${el.currentTarget.id}`
    );
    descriptions.forEach((description) => {
      if (description.style.display == "block") {
        description.style.display = "none";
      } else {
        description.style.display = "block";
      }
    });
  });
});
