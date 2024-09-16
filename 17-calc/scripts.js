'use strict';

//определяем значение числа, передаем в массив, для того чтобы передать дальше в функцию
function numInfo() {
    const input1 = document.querySelector('.num__one').value
    const input2 = document.querySelector('.num__two').value

    document.querySelector('.num__one').value = ''
    document.querySelector('.num__two').value = ''

    const arr = []

    arr.push(input1)
    arr.push(input2)

    return arr 
}

// сложение
function resultSum() {
    const arr = numInfo()
    
    const num1 = arr[0]
    const num2 = arr[1]

    const result = Number(num1) + Number(num2)
    resPanel(result)
}

// вычитание
function resultMin() {
    const arr = numInfo()
    
    const num1 = arr[0]
    const num2 = arr[1]

    const result = Number(num1) - Number(num2)
    resPanel(result)
}

// умножение
function resultMult() {
    const arr = numInfo()
    
    const num1 = arr[0]
    const num2 = arr[1]

    const result = Number(num1) * Number(num2)
    resPanel(result)
}

// деление
function resultDivi() {
    const arr = numInfo()
    
    const num1 = arr[0]
    const num2 = arr[1]

    const result = Number(num1) / Number(num2)
    resPanel(result)
}


// функция для отображение финального результата и хранение в localStorage
function resPanel(res) {
    document.querySelector('.result__info').innerText = res

    const infoPanelJSON = JSON.stringify({
        resultNum: res
    })
    localStorage.setItem('resultNum', infoPanelJSON)
}


