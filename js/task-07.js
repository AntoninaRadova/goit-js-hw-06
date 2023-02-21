const sizeControl = document.querySelector('input#font-size-control')
const mainText = document.querySelector('span#text')

// Додавання слухача
sizeControl.addEventListener('input', e => {
    mainText.style.fontSize = `${e.target.value}px`
})
