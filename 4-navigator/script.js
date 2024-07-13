
// Данные о координатах точек
let addressLat = 10; // широта первой точки
let addressLong  = 15; // долгота первой точки
let positionLat  = 5; // широта второй точки
let positionLong = 6; // долгота второй точки

// Вычисление разности координат
let dx = positionLat  - addressLat;
let dy = positionLong - addressLong ;

// Использование теоремы Пифагора для вычисления линейного расстояния
let distance = Math.sqrt(dx * dx + dy * dy);


console.log("Линейное расстояние между двумя точками составляет примерно " +  Math.floor(distance) + " единиц.");


// пришлось гуглить теорему для решения задания