
//данные задания
let hasLicence = true;
let age = 18;
let isDrink = false;


//данные пользователя
let ageUser = 16;



let canDriver = ((age <= ageUser) && hasLicence && !isDrink);              

console.log(`Водитель может сесть за руль? ${canDriver ? 'Может' : 'Не может'}`)



