const contactSelect = document.querySelector('.contact-select');
const contactsPoints = document.querySelectorAll('.contact__point');
const contactsSteps = document.querySelectorAll('.contact__step');

contactSelect.addEventListener('change', (e) => {
  changePoints(contactSelect.value);
});

const changePoints = (value) => {
  contactsPoints.forEach((c) => {
    c.classList.remove('active');
  });
  contactsSteps.forEach((s) => {
    s.classList.remove('active');
  });

  if (value === 'Москва') {
    contactsSteps[0].classList.add('active');
    contactsPoints[2].classList.add('active');
  }
  if (value === 'Санкт-Петербург') {
    contactsSteps[3].classList.add('active');
    contactsPoints[3].classList.add('active');
  }
  if (value === 'Краснодар') {
    contactsSteps[3].classList.add('active');
    contactsPoints[0].classList.add('active');
  }
  if (value === 'Ростов-на-Дону') {
    contactsSteps[2].classList.add('active');
    contactsPoints[1].classList.add('active');
  }
};
