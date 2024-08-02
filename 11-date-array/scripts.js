// 11.13. Домашнее задание - Итерации в массивах

function repeatArr(arr) {
    let originalArr = arr;
    //console.log(originalArr)
    let negativArr = [];
    let positivArr = [];

    originalArr.forEach(arr => {
        //console.log(`элемент ${arr}, длина элемента: ${arr.length}`)
        if(arr.length != 10) { // проверка если длина элемента больше или меньше 10
            negativArr.push(arr)
        } else if(arr.length == 10) {
            positivArr.push(arr);
        }
        // console.log(negativArr)
        // console.log(positivArr)
    });  

    let positiv2Arr = [];
    let negativ2Arr = [];

    positivArr.forEach(arr => {
        //console.log(`день: ${arr[0]+arr[1]}  месяц: ${arr[3]+arr[4]} год ${arr[6]+arr[7]+arr[8]+arr[9]}`)
        if('00' == arr[0]+arr[1]) {
            negativ2Arr.push(arr) // проверка на дату 00 в элементах arr[0]+arr[1]
        }
        if('00' == arr[3]+arr[4]) { 
            negativ2Arr.push(arr); // проверка на дату 00 в элементах arr[3]+arr[4]
        } else if(arr[0]+arr[1] <= 31) { // проверка на arr[0]+arr[1] меньше или равно 31 (31 день)
            if(arr[3]+arr[4] <= 12) { // проверка на arr[3]+arr[4] меньше или равно 12 (12 месяцев)
                if(arr[2] == '/' || arr[2] == '-' && arr[5] == '/' || arr[5] == '-') { // проверка на arr[2] и arr[5] нахождение элементов '/' и '-'
                    positiv2Arr.push(arr) // сохраняем в массив все прошедшие проверку даты
                } 
            }
        } else {
            negativ2Arr.push(arr)
        }

    });
    

    let finalArr = [];
    let repearArr = [];
    let repearArr2 = []


    positiv2Arr.forEach(arr => { // используем метод forEach() для удаления из массива не подходящих дат для замены символов '/' на '-'
        //console.log(`элементы: ${arr[2]} и ${arr[5]}`)
        if(arr[2] != '-' || arr[5] != '-') {
            repearArr.push(arr); // сохраняем не подходящие даты в массив repearArr


        } else if (arr[2] == '-' && arr[5] == '-') {
            finalArr.push(arr); // даты соотвествующие формату xx-xx-xxxx уходят сразу в финальный массив
        }
    });
    //console.log(repearArr)

    repearArr2.push(repearNegativeArr(repearArr)) // используем функцию repearNegativeArr() для формирование нового массива с исправленными символами между датами с '/' на '-'
    repearArr2 = repearArr2.flat() // с помощью метода flat() уменьшаем погружения массива
    //console.log(repearArr2.length)


    if (repearArr2.length != 0) { // проверка на нахожедние в массиве rpearArr2 элементов
        return finalArr.concat(repearArr2) // через .concat() соединение 2х массовов в один 
    } else if(repearArr2 == 0) { // в случае если в repearArr2 нет элементов, выводить сразу положительный массив
        return finalArr
    } else {
        return finalArr
    }
    
}

// функция для удаления не правильных символов '/' c заменой на '-'
function repearNegativeArr(arr) {
    let unifiedArr = arr
    let endArr = [];

    unifiedArr.map(date => { // используем метод map()
        // Разделяем по символам '-' и '/'
        let parts = date.split(/[-\/]/); // удаляем все возможные символы
        // Объединяем с помощью '-'
        let finalArr = parts.join('-') 
        // console.log(finalArr)
        endArr.push(finalArr)
    });
    // console.log(endArr)
    return endArr
}

const arr = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023', '11/00/2023', '110/0/2023', 'wertyuiopa', '29-12-1987', '30/11/1990', '27/12-1984', '12-01/1964'];

console.log(repeatArr(arr)) // приводим все правильные даты к формату 10-02-2022


