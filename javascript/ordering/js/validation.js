const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const mapInput = document.getElementById('map').firstElementChild;
const sendBtn = document.getElementById('send_btn');
const messageContainer = document.getElementById('message');

const nameErrorMessage = 'Введите ФИО используя только русские и/или латинские буквы';
const phoneErrorMessage = 'Введите номер в формате 7/+7/8/+8 9ХХХХХХХХХ';
const emailErrorMessage = 'Введите корректный почтовый адрес. Он должен содержать имя почты, символ @ и домен';
const mapErrorMessage = 'Отметьте адрес доставки на карте';
const successMessage = 'Заказ оформлен!';

const namePattern = '^([A-Za-zА-Яа-яЁё ]+)$';
const phonePattern = '^((\\+7|\\+8|7|8)*(9)+([0-9]){9})$';
const emailPattern = '^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\\.[a-z]{2,})$';

nameInput.setAttribute('pattern', namePattern);
phoneInput.setAttribute('pattern', phonePattern)
emailInput.setAttribute('pattern', emailPattern);

let validate = (el) => {
    let validator = el.nextElementSibling;
    if (el.value.length === 0) {
        validator.setAttribute('valid', 'unknown');
    } else if (el.validity.valid) {
        validator.setAttribute('valid', 'true');
    } else {
        validator.setAttribute('valid', 'false');
    }
}

sendBtn.onclick = () => {
    messageContainer.innerHTML = '';
    if (nameInput.validity.valid && phoneInput.validity.valid && emailInput.validity.valid && mapInput.validity.valid) {
        messageContainer.innerHTML += `<div class="message">
                                            <label>${successMessage}</label>
                                       </div>`;
    }
    if (!nameInput.validity.valid) {
        messageContainer.innerHTML += `<div class="message">
                                            <label for="name" class="error_message linked">${nameErrorMessage}</label>
                                       </div>`;
    }
    if (!phoneInput.validity.valid) {
        messageContainer.innerHTML += `<div class="message">
                                            <label for="phone" class="error_message linked">${phoneErrorMessage}</label>
                                       </div>`;
    }
    if (!emailInput.validity.valid) {
        messageContainer.innerHTML += `<div class="message">
                                            <label for="email" class="error_message linked">${emailErrorMessage}</label>
                                       </div>`;
    }
    if (!mapInput.validity.valid) {
        messageContainer.innerHTML += `<div class="message">
                                            <label class="error_message">${mapErrorMessage}</label>
                                       </div>`;
    }
    return false;
}



