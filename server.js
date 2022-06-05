require('dotenv').config();
const calc = require('./Calcs');

const express = require('express');
const puppeteer = require('puppeteer');

const server = express();

const URLREC = process.env.URLREC;

async function tempRec() {

    server.get('/', async (request, response) => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(URLREC);

         pageContentTemp = await page.evaluate(() => {
            var infos = [];
            var recTdia = document.querySelector('.DailyContent--temp--3d4dn').innerHTML; //Recife Temp Dia
            var recTnoite = document.querySelector('.DailyContent--temp--3d4dn').innerHTML; //Recife Temp Noite
            infos.push(recTdia);
            infos.push(recTnoite);
            return recTempAt;
        });
        calc.conversao(pageContentTemp);

        response.status(200).json({
            Temperatura: pageContentTemp
        }
        )

    });
}

tempRec();


server.listen(9000);
