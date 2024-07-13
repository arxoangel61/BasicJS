
//данные задания
let hasLicence = true;
let age = 18;
let isDrink = false;


//данные пользователя
let userLicence = true;
let ageUser = 16;
let isDrinkUser = false;


let canDriver = (hasLicence == userLicence && age <= ageUser && isDrink == isDrinkUser)

console.log(`Водитель может сесть за руль? ${canDriver ? 'Может' : 'Не может'}`)



