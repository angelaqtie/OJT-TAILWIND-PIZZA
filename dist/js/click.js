const clicks = document.querySelectorAll("li");
const contents = document.querySelectorAll(".offer__details");

clicks.forEach((click) => {
  click.addEventListener("click", () => {
    removeActiveClick();
    click.classList.add("active");
    const activeContent = document.querySelector(`#${click.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActiveClick() {
  clicks.forEach((click) => {
    click.classList.remove("active");
  });
}

function removeActiveContent() {
  contents.forEach((content) => {
    content.classList.remove("active");
  });
}
