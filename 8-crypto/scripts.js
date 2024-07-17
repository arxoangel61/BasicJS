

function encoder(code) {
    let codeLength = code.length;
    // console.log(codeLength)
    let originalCode = code.split('');
    // console.log(originalCode)

    if (codeLength == 4 ){ // проверка на длину элемента для кодировки
        let resEncoder = [originalCode[3],originalCode[2],originalCode[1],originalCode[0]]
        // console.log(resEncoder)
        let resFinal = resEncoder.join('');
        return resFinal;
    }  else if(codeLength == 6 ){ // проверка на длину элемента для кодировки
        let resEncoder = [originalCode[3],originalCode[2],originalCode[1],originalCode[0],originalCode[4],originalCode[5]]
        // console.log(resEncoder)
        let resFinal = resEncoder.join('');
        return resFinal;
    } else if(codeLength == 8 ){ // проверка на длину элемента для кодировки
    let resEncoder = [originalCode[3],originalCode[2],originalCode[1],originalCode[0],originalCode[7],originalCode[5],originalCode[6],originalCode[4]]
    // console.log(resEncoder)
    let resFinal = resEncoder.join('');
    return resFinal;
    }   else {
        return console.log(`ВНИМАНИЕ! Чтобы сохранить код количество символов должно быть не меньше шага в 4-6-8 символов`)
    }
}

function checkPass(pass1, pass2) {

    let decoderPass = pass1;
    // console.log(decoderPass.length);
    let cheakPass = pass2;
    // console.log(cheakPass.length)
    if(decoderPass.length == cheakPass.length) {
        if(decoderPass.length == 8 || decoderPass.length == 6 || decoderPass.length == 4) {
            let cheakDecoderPass = encoder(pass2)
            // console.log(cheakDecoderPass)
            if(decoderPass == cheakDecoderPass) {
                return console.log(true)
            } else {
                return console.log(false)
            }
        }
    } else if (decoderPass.length != cheakPass.length){
        return console.log(false)
    } else {
        return console.log(false)
    }
}

let ele = encoder('passwor'); // проверка на длинну элементов для сохранения кода

let elem = encoder('password'); // проверка из 8 символов
console.log(elem);
// console.log(elem)
// ssapdorw   
let result = checkPass(elem, 'password')

let elem2 = encoder('word'); // проверка из 4 символов
let result2 = checkPass(elem2, 'word')


let elem3 = encoder('checke') // проверка из 6 симолов
let result3 = checkPass(elem3, 'checke');


let elem4 = encoder('password') 
let result4 = checkPass(elem4, 'passstop') //проверка на ошибку


let result5 = checkPass('ssapdorw', 'password') // проверка на работу 2 функции без присваения элемента 

let result6 = checkPass('ssapdor', 'password') // проверка если длинна элемента1 меньше длины элемента2