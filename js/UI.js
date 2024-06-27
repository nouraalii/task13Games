import { Details } from "./details.js";

export class Ui {
   // display cards
   displayCards(allCards) {
       let cartoona = '';

       for (let i = 0; i < allCards.length; i++) {
           cartoona += `<div class="col">
               <div data-id="${allCards[i].id}" class="card h-100 bg-transparent" role="button">
                  <div class="card-body">
                     <figure class="position-relative">
                        <img class="card-img-top object-fit-cover h-100" src="${allCards[i].thumbnail}">
                     </figure>
                     <figcaption>
                        <div class="hstack justify-content-between">
                           <h3 class="h6 small text-white">${allCards[i].title}</h3>
                           <span class="badge text-bg-primary p-2">Free</span>
                        </div>
                        <p class="card-text small text-center opacity-50 cards-color">
                        ${allCards[i].short_description.split(" ", 8).join(" ")}
                        </p>
                     </figcaption>
                  </div>
                  <footer class="card-footer small hstack justify-content-between">
                     <span class="badge badge-color">${allCards[i].genre}</span>
                     <span class="badge badge-color">${allCards[i].platform}</span>
                  </footer>
               </div>
            </div>`;
       }
       document.getElementById('cards').innerHTML = cartoona;
       this.addCardEventListeners();
   }

   addCardEventListeners() {
       document.querySelectorAll('.card').forEach(card => {
           card.addEventListener('click', function() {
               const id = card.getAttribute('data-id');
               document.getElementById('cards').classList.add('d-none');
               document.getElementById('details').classList.remove('d-none');
               document.querySelector('.games-cards').classList.add('d-none');
               new Details(id);
           });
       });
   }

   // details page
   displayGameDetails(game) {
       let detailsOfGame = `
           <div class="row g-4">
               <div class="col-md-4">
                   <img src="${game.thumbnail}" class="w-100" alt="image details">
               </div>
               <div class="col-md-8">
                   <h3>Title: ${game.title}</h3>
                   <p>Category: <span class="badge text-bg-info"> ${game.genre}</span> </p>
                   <p>Platform: <span class="badge text-bg-info"> ${game.platform}</span> </p>
                   <p>Status: <span class="badge text-bg-info"> ${game.status}</span> </p>
                   <p class="small">${game.description}</p>
                   <a class="btn btn-outline-warning" target="_blank" href="${game.game_url}">Show Game</a>
               </div>
           </div>`;
       document.getElementById('detailsContent').innerHTML = detailsOfGame;
   }
}
