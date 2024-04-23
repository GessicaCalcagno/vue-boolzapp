// const dt = luxon.DateTime;
// // FORMAT
// console.log(dt.now());
// const now = dt.now(); // object --> data e ora dell'avvio della pagina 10:38:23
// console.log(now.setLocale('it').toLocaleString(dt.DATETIME_HUGE));
// // PARSE
// const dateString = "14/10/1985"; // string
// const dateLuxon = dt.fromFormat(dateString, "dd/MM/yyyy");
// console.log(dateLuxon);
// // FORMAT
// console.log(dateLuxon.toLocaleString(dt.DATETIME_HUGE));

// //non possiamo fare const {DateTime} = luxon?
// console.log(luxon.DateTime.now());

// //luxon.DateTime devo iniziare sempre cosi
// const now = luxon.DateTime.now(); //Object quindi lo devo formattare in stringa  --> data e ora si avviano alla pagina quindi lo dobbiamo inserire all' invio del messaggio! (ricorda questo è un dato statico --> lo devo generare al click)
// console.log(now.toLocaleString(luxon.DateTime.DATETIME_SHORT_WITH_SECONDS));

const { createApp } = Vue;

createApp({
  data() {
    return {
      // Chat di default indice 0
      activeIndex: 0,
      //Variabile per la ricerca del contatto
      search: "",
      //variabile per savare i nuovi messaggi inviati
      newMessage: {
        date: "da cambiare",
        message: "",
        status: "sent",
      },

      contacts: [
        {
          name: "Michele",
          avatar: "_1",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di stendere i panni",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "_2",
          visible: true,
          messages: [
            {
              date: "20/03/2020 16:30:00",
              message: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "sent",
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "_3",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              message: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro B.",
          avatar: "_4",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro L.",
          avatar: "_5",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ricordati di chiamare la nonna",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Va bene, stasera la sento",
              status: "received",
            },
          ],
        },
        {
          name: "Claudia",
          avatar: "_6",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao Claudia, hai novità?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Non ancora",
              status: "received",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "Nessuna nuova, buona nuova",
              status: "sent",
            },
          ],
        },
        {
          name: "Federico",
          avatar: "_7",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Fai gli auguri a Martina che è il suo compleanno!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Grazie per avermelo ricordato, le scrivo subito!",
              status: "received",
            },
          ],
        },
        {
          name: "Davide",
          avatar: "_8",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao, andiamo a mangiare la pizza stasera?",
              status: "received",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "OK!!",
              status: "received",
            },
          ],
        },
      ],
    };
  },

  methods: {
    chooseConversation: function (clickIndex) {
      this.activeIndex = clickIndex;
    },

    sendMessage: function () {
      if (this.newMessage.message.trim() === "") return;
      const copyContact = { ...this.newMessage };
      this.contacts[this.activeIndex].messages.push(copyContact);
      this.newMessage.message = "";
      console.log(this.contacts[this.activeIndex].messages);

      // Simulazione risposta dopo 1 secondo
      setTimeout(() => {
        const response = {
          date: "da cambiare",
          message: "Ok",
          status: "received",
        };
        this.contacts[this.activeIndex].messages.push(response);
      }, 1000);
    },

    searchContact: function () {
      // Utilizziamo forEach per iterare attraverso ogni contatto nella lista dei contatti
      this.contacts.forEach((curContact) => {
        const userName = curContact.name.toLowerCase();
        if (userName.includes(this.search)) {
          curContact.visible = true;
        } else {
          curContact.visible = false;
        }
      });
    },
    
    // splice = cancella il messaggio selezionato
    //Parametri = l'indice del contatto e l'indice del messaggio da cancellare 1= un solo messaggio da cancellare se 2= cancella quello selezionato ed il successivo
    deleteMessage: function(clickedIndex, activeIndex) {
       this.contacts[activeIndex].messages.splice(clickedIndex, 1)
      }
  },
}).mount("#app");
