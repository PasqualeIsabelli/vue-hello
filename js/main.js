'use strict'

/*ESERCIZIO: Vue Hello
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

const app = Vue.createApp({
  data() {
    return {
      // Messaggio
      message: "Hello Vue",
      // Immagine
      image: "img/Vue.png"
    }
  }
}).mount("#app")