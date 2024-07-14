
function converterMoney(sum, originalMoney, targetMoney) {
    switch(true) {
        case originalMoney == 'rub' && targetMoney == 'usb':
            return sum/87.74;
        case originalMoney == 'usb' && targetMoney == 'rub':
            return sum*87.74;
        case originalMoney == 'eur' && targetMoney == 'rub':
            return sum*95.76;
        case originalMoney == 'rub' && targetMoney == 'eur':
            return sum/95.76;
        case originalMoney == 'usb' && targetMoney == 'eur':
                return sum*0.92;
        case originalMoney == 'eur' && targetMoney == 'usb':
                return sum*1.1;
        default:
            return null
    }
}


console.log(converterMoney(1000, 'rub', 'usb'))
console.log(converterMoney(1000, 'usb', 'rub'))
console.log(converterMoney(1000, 'rub', 'eur'))
console.log(converterMoney(1000, 'usb', 'eur'))
console.log(converterMoney(1000, 'eur', 'usb'))

