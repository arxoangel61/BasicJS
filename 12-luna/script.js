
function lunaCard(num) {

    let card = num.trim().replaceAll('-', '') // убиваем пробелы и -
    // console.log(typeof card)
    let checksum = 0;
    let finalsum = 0;
    //console.log(repearCard(card))
    
    if(repearCard(card) == true) { // если элемент прошёл проверку то перебираем элемент на индекс и число
        for(let i = 0, b = 0; i<card.length; i++, b++) { // i - число элемента , b - индекс элемента
            //console.log(`индекс: ${b} элемент: ${card[i]}`)
            let num2 = card[i]  // для удобства приобразуем card[i] в num2
    
            if( b % 2 === 0) { 
                let buffer = num2 * 2;
                //console.log(typeof buffer)
                buffer > 9 ? checksum += buffer - 9 : checksum += buffer // математические действие по формуле теории Луны
            } else {
                checksum += num2;
            } 
        }    
        //console.log(checksum) // получаем обработанный элемент 
        for(let a = 0; a < checksum.length; a++) {
            finalsum += +checksum[a] // суммируем все числа в элементе

        }
        //console.log(finalsum)

        return finalsum % 10 === 0 ? true : false; 
    } else {
        return false
    }
        

}


function repearCard(num) { // проверочная функция 
    if(num.length == 16) { // проверяем на длинну элемента
        for(const elem of num) { // перебираем каждый символ и в случае не нахождения остатка от числа будет false
            if(elem % 2 == 0 || elem % 2 == 1) {
                return true
            } else {
                return false
            }
        }
    } else {
        return false
    }

}

const card = '4561-2612-1234-5464'  //57 - false
console.log(lunaCard(card))

const card2 = '4111111111111111'   // 30 - true
console.log(lunaCard(card2))

const card3 = '411-111111-1111d11'   // false
console.log(lunaCard(card3))
