//  Primer problema // 

let image = document.querySelector('.cat')

image.addEventListener('click', () => {
    if (image.style.border) {
        image.style.border = '';
    } else {
        image.style.border = "2px solid red";
    }
});

// Segundo problema //

const verify = document.querySelector('.verify')
verify.addEventListener("click", () => {
    let quantity1 = document.querySelector('#dog1').value
    let quantity2 = document.querySelector('#dog2').value
    let quantity3 = document.querySelector('#dog3').value

    let result = +quantity1 + +quantity2 + +quantity3


    if (result <= 0) {
        total = document.querySelector('.stickers-result')
        total.innerHTML = 'debes ingresar al menos 1 sticker';
    }
    else if (result <= 10) {
        total = document.querySelector('.stickers-result')
        total.innerHTML = 'llevas ' + result + ' stickers';
    }
    else {
        total = document.querySelector('.stickers-result')
        total.innerHTML = 'llevas demasiados stickers';
    }
});

// tercer problema //



const pass = document.querySelector('.pass')
pass.addEventListener("click", () => {
    let number1 = document.querySelector('#num1').value
    let number2 = document.querySelector('#num2').value
    let number3 = document.querySelector('#num3').value

    let password = number1 + number2 + number3

    if (password == 911) {
        let response = document.querySelector('.response')
        response.innerHTML = "password 1 correcto";
    }
    else if (password == 714) {
        let response = document.querySelector('.response')
        response.innerHTML = "password 2 es correcto";
    }
    else {
        let response = document.querySelector('.response')
        response.innerHTML = "password incorrecto";
    }
})
