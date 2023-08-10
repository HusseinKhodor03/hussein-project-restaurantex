const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

function handleGridDiv() {
  const gridContainer = document.querySelector('.grid--1x3');
  const lastFourImages = Array.from(gridContainer.querySelectorAll('.follow-us__image')).slice(-4);

  if (window.innerWidth >= 768) {
    const existingGridDiv = gridContainer.querySelector('.grid--1x2');
    if (!existingGridDiv) {
      const newGridDiv = document.createElement('div');
      newGridDiv.classList.add('grid', 'grid--1x2');

      lastFourImages.forEach(image => {
        newGridDiv.appendChild(image);
      });

      gridContainer.appendChild(newGridDiv);
    }
  } else {
    const existingGridDiv = gridContainer.querySelector('.grid--1x2');
    if (existingGridDiv) {
      lastFourImages.forEach(image => {
        gridContainer.appendChild(image);
      });

      gridContainer.removeChild(existingGridDiv);
    }
  }
}

handleGridDiv();

window.addEventListener('resize', handleGridDiv);
