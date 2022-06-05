const conversao = (entrada) => {
    const com = entrada;
    const rplc = com.replace('°', '');
    const conversion = (rplc - 32) / 1.8000;
    const tempRound = +(conversion.toFixed(2));
    return console.log('Temperatura em Recife neste momento: ', tempRound);
}

module.exports = {
    conversao
};