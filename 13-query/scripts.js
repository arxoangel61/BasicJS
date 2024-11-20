// Объяснение задачи
// Создание функции для преобразования объекта параметров в строку query-параметров.


const users = {
    search: 'Вася',
    take: 10,
    
}

function usersUrl() {
    let arrKey = [];
    let arrUserKey = [];
    for(key in users) {
        // console.log(key)
        // console.log(users[key])
        arrKey.push(key)
        arrUserKey.push(users[key])
    }
    // console.log(arrKey)
    // console.log(arrUserKey)
    const[key1, key2, ...allKey] = arrKey; //ключи
    const[obj1, obj2, ...allObj] = arrUserKey; //значение

    return `${key1}=${obj1}&${key2}=${obj2}`
    
}

let res = usersUrl(users)
console.log(res)

// search=Вася&take=10

