const express = require('express');
const https = require('https');
require('dotenv').config();


const server = express();
const URLREC = process.env.URLREC;
const URLOLI = process.env.URLOLI;
server.use(express.json());
server.listen(2000);


server.get('/cidade/:cidade', async (req, res) => {
    const { cidade } = req.params;

    switch (cidade) {
        case 'recife':
            url = URLREC;
            break;
        case 'olinda':
            url = URLOLI;
            break;
        default:
            console.log("Cidade não encontrada");
            break;
    }

    const api = url; // recebe a URL, posso fazer a modificação das cidades aqui para reduzir o tamanho do código
    try {
        https.get(api, function (response) {
            console.log(response.statusCode);
            response.on("data", function (data) {
                const wea = JSON.parse(data);
                const tempe = Math.round(wea.main.temp);
                const tempMin = Math.round(wea.main.temp_min);
                const humid = Math.round(wea.main.humidity);

                console.log("Temperatura em Recife: " + tempe + "°"); // Remover nome recife e concatenar as cidades 
                console.log("Temperatura mínima Recife: " + tempMin + "°"); // Remover nome recife e concatenar as cidades
                console.log("Humidade: " + humid + "%");
                return res.send({
                    Temperatura_atual: tempe,
                    Temperatura_minima: tempMin,
                    Humidade: humid
                })
            })

        });

    } catch (error) {
        res.send("Verificar isto: ", error);
    }
});
