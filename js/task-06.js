const validationInput = document.querySelector('#validation-input');

// Додаємо слухача подій
validationInput.addEventListener('blur', event => {

    // Перевірка на число 6
    if (event.target.value.length == validationInput.getAttribute('data-length')) {

        validationInput.classList.add('valid')

        if (validationInput.classList.contains('invalid')) {
            validationInput.classList.remove('invalid')
        }
    } else {
        if (validationInput.classList.contains('valid')) {
            validationInput.classList.remove('valid')
        }
        
        validationInput.classList.add('invalid')
    }
})
