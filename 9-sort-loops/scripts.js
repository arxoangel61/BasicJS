let arr = [1, 40, -5, 10, 0, -10]

function iteratingElem(elem) {
    let n = elem.length; // длина массива
    negativElem = [];
    positivElem = [];
    finalArr = [];

    for (let i = 0; i < n; i++) {
        if(elem[i] < 0) { // отделяем все числа меньше нуля и формируем отрицательный  отричательный массив
            negativElem.push(elem[i])
            // console.log(negativElem)
            for(let a = 0; a < n; a++) { // перебираем отрицательный массив
                for(let q = 0; q < n;  q++) {
                    if (negativElem[q] > negativElem[q + 1]) {
                        [negativElem[q], negativElem[q + 1]] = [negativElem[q +1], negativElem[q]];
                    }
                }
            } 
        } else if(elem[i] >= 0) { // отделяем все числа равные нулю и выше и формируем массив
            positivElem.push(elem[i])
            // console.log(positivElem)
            for(let j = 0; j < n; j++) { // перебираем положительный массив
                for(let k = 0; k < n;  k++) {
                    if (positivElem[k] > positivElem[k + 1]) {
                        [positivElem[k], positivElem[k + 1]] = [positivElem[k +1], positivElem[k]];
                    }
                }
              
            } 
        }
    }
    // соединяем через метод concat 2 массива
    finalArr = negativElem.concat(positivElem);
    return finalArr
    
}



let res = iteratingElem(arr)
console.log(res)


