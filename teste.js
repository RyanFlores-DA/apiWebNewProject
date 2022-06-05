require('dotenv').config();
const calc = require('./Calcs');

const QUATRO = process.env.QUATRO;
async function teste() {
    n1 = 4;
    n2 = 4;
    n3 = 4;

    var n4 = [QUATRO, 4, 4, 4]
    var mult = [];
    for (i = 0; i < 4; i++) {
        mult.push(n4[i] * 2);
    }


    return console.log(mult);
}


function teste3(entrada){
    return console.log(entrada * entrada);
}


teste();
calc.teste2('74°');
//teste2('74°');