// details.js

import { Ui } from "./UI.js";

export class Details {
    constructor(idGame) {
        this.ui = new Ui();
        this.getGameDetails(idGame);
        document.getElementById('btnClose').addEventListener('click', function(e) {
            document.getElementById('details').classList.add('d-none');
            document.getElementById('cards').classList.remove('d-none');
            document.querySelector('.games-cards').classList.remove('d-none');
        });
    }

    async getGameDetails(idGame) {
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGame}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'a35506da87msh5602c0f9c5f5ce2p177f47jsn63421583f738',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            this.ui.displayGameDetails(result);
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }
}
