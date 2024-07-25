
/*
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
                return true
            } else {
                return false
            }
        }
    } else if (decoderPass.length != cheakPass.length){
        return false
    } else {
        return false
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

*/


function encoder(code) {
    let codeLength = code.length;
    let originalCode = code.split('');
    let copyOriginalCode = code.split('')

    let finalArr = [];
    let reversArr = [];
    let newReversArr = [];
    

    if(codeLength % 2 == 0) {
        for(let i = 0; i < codeLength; i++) {
            if(i*2 == codeLength) {
                let spliceArr = copyOriginalCode.splice(0, i)
                for(let b = 0; b < i; b++) {
                    finalArr.push(originalCode[b])
                    reversArr = finalArr.reverse()
                }
                newReversArr = reversArr.concat(copyOriginalCode)
                return newReversArr.join('')
            }
        }
    } else if(codeLength % 2 != 0) {
        for(let a = 0; a < codeLength; a++) {
            if(a*2 - 1 == codeLength) {
                let spliceArr = copyOriginalCode.splice(0, a)
                for(let k = 0; k < a; k++) {
                    finalArr.push(originalCode[k])
                    reversArr = finalArr.reverse()
                }  
                newReversArr = reversArr.concat(copyOriginalCode)
                return newReversArr.join('')
            }
        }
    }
}


function checkPass(pass1, pass2) {

    let decoderPass = pass1;
    // console.log(decoderPass.length);
    let cheakPass = pass2;
    // console.log(cheakPass.length)
    let cheakArr = [];
    let copydecoderPass = []
    let reversArr = [];
    let finalArr = [];

    if(decoderPass.length == cheakPass.length) {
            for(let i = 0; i < cheakPass.length; i++) {
                cheakArr.push(cheakPass[i])
                copydecoderPass.push(decoderPass[i])
                if (i*2 == cheakPass.length || i*2-1 == cheakPass.length) {
                    let spliceArr = cheakArr.splice(0, i);
                    let spliceDecoderArr = copydecoderPass.splice(0, i);
                    for(let b = 0; b < i; b++) {
                        finalArr.push(spliceArr[b])
                        reversArr = finalArr.reverse()
                    }
                    console.log(reversArr = reversArr.join(''))
                    console.log(spliceDecoderArr = spliceDecoderArr.join(''))
                    if (reversArr === spliceDecoderArr) {
                        return true
                    } else {
                        return false
                    }
                }
            }
    } else {
        return false
    }
}


let elem = encoder('password'); 
console.log(elem);


let result5 = checkPass(elem, 'password') // проверка на работу 2 функции без присваения элемента 
console.log(result5)