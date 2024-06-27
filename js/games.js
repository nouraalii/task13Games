//home page

import { Ui } from "./UI.js";
import { Details } from "./details.js";

export class Card {

    constructor() {
        this.ui = new Ui();
        this.getCards('mmorpg');
        document.querySelectorAll('.nav-category').forEach(link => {
            link.addEventListener('click', () => {
                document.querySelectorAll('.nav-category').forEach(navLink => {
                    navLink.classList.remove('active', 'text-primary');
                });

                link.classList.add('active', 'text-primary');

                let category = link.getAttribute('data-category');
                this.getCards(category);
            });
        });
    }

    async getCards(category) {
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=${category}&platform=pc`;
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
            this.ui.displayCards(result);
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Card();
});
