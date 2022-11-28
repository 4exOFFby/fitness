const showProductCardContent = () => {
  const slides = document.querySelectorAll('.trainers__slider-item');
  for (let slide of slides) {
    slide.addEventListener('click', () => {
      slide.classList.toggle('trainers__slider-item--touch');
    });
  }
};
export {showProductCardContent};
