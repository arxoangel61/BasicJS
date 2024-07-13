

let languages = String(prompt('enter please your langeages (ru, en, fr, de): '));

let ru = 'ru';
let en = 'en';
let fr = 'fr';
let de = 'de';

switch(languages) {
    case ru:
        console.log('Привет!');
        break;
    case en:
        console.log('Hello!');
        break;
    case fr:
        console.log('Salut!');
        break;
    case de:
        console.log('Gutten tag!');
        break;
    default:
        console.log('Вы выбрали не правильный язык, попробуйте еще раз');
}