const button1 = document.querySelector('.form__button_1');
const phoneInput1 = document.querySelector('.tel-1');

button1.addEventListener('click', async () => {
  let currentPhone = phoneInput1.value;
  if (phoneInput1.value.length > 9) {
    let formData = new FormData();
    formData.append('key1', currentPhone);
    let responce = await fetch('sendmail.php', {
      method: 'POST',
      body: formData,
    });
    //  thanksPopup();
    phoneInput1.value = '';
    alert('Ваша заявка отправлена');
  } else {
    alert('Введите корректный номер телефона');
  }
});

const button2 = document.querySelector('.form__button-2');
const phoneInput2 = document.querySelector('.tel-2');
const nameInput2 = document.querySelector('.name-2');
const select2 = document.querySelector('.form__select-2');

button2.addEventListener('click', async () => {
  console.log('ok');
  let currentPhone = phoneInput2.value;
  let currentName = nameInput2.value;
  let currentSelect = select2.value;
  //   let currentPhone = phoneInput1.value;
  if (phoneInput2.value.length > 9 && nameInput2.value.length > 2) {
    let formData = new FormData();
    formData.append('key2', currentPhone);
    formData.append('key3', currentName);
    formData.append('key4', currentSelect);
    let responce = await fetch('sendmail.php', {
      method: 'POST',
      body: formData,
    });
    //  thanksPopup();
    phoneInput2.value = '';
    nameInput2.value = '';
    alert('Ваша заявка отправлена');
  } else {
    alert('Введите корректный номер телефона и имя');
  }
});

const button3 = document.querySelector('.form__button-3');
const phoneInput3 = document.querySelector('.tel-3');
const nameInput3 = document.querySelector('.name-3');
const select3 = document.querySelector('.form__select-3');

button3.addEventListener('click', async () => {
  console.log('ok');
  let currentPhone = phoneInput3.value;
  let currentName = nameInput3.value;
  let currentSelect = select3.value;
  //   let currentPhone = phoneInput1.value;
  if (phoneInput3.value.length > 9 && nameInput3.value.length > 2) {
    let formData = new FormData();
    formData.append('key2', currentPhone);
    formData.append('key3', currentName);
    formData.append('key4', currentSelect);
    let responce = await fetch('sendmail.php', {
      method: 'POST',
      body: formData,
    });
    //  thanksPopup();
    phoneInput3.value = '';
    nameInput3.value = '';
    alert('Ваша заявка отправлена');
  } else {
    alert('Введите корректный номер телефона и имя');
  }
});

// const thanksBlock = document.querySelector('.thanks');

// function thanksPopup() {
//   thanksBlock.style.display = 'block';
//   setTimeout(() => {
//     thanksBlock.style.display = 'none';
//   }, 3000);
// }
