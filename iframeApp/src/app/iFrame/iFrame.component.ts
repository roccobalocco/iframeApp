import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iFrame',
  templateUrl: './iFrame.component.html',
  styleUrls: ['./iFrame.component.css'],
})
export class IFrameComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // event listener per mozilla post message
    window.addEventListener(
      'message',
      (event) => {
        console.log(`messaggio da iFrameAPP! Origine: ${event.origin}`);
        console.log(event);
        if (event.origin == 'http://localhost:4200') {
          this.sendMessage();
        }
      },
      false
    );
  }

  sendMessage() {
    console.log('Invio in corso');
    if (window)
      (
        window!.document!.getElementById('myiFrame')! as HTMLIFrameElement
      ).contentWindow!.postMessage(
        { titolo: 'Pong!', descrizione: 'Ciao a te!' },
        'http://localhost:4200'
      );
    else console.error('Errori in invio');
  }
  sendMessage2() {
    console.log('Invio in corso');
    if (window)
      (
        window!.document!.getElementById('myiFrame2')! as HTMLIFrameElement
      ).contentWindow!.postMessage('Ciao!', 'http://192.168.1.203:8080');
    else console.error('Errori in invio');
  }
  sendLyraTicket() {
    console.log('Invio in corso');
    if (window)
      (
        window!.document!.getElementById('myiFrame2')! as HTMLIFrameElement
      ).contentWindow!.postMessage(
        {
          ticketLyra: {
            Tck_class: 'Modifica funzionamento [Svi]',
            Tck_cliRagSoc: 'Sauter Italia SpA',
            Tck_stato: '080 - Chiuso - Risolto',
            Tck_matr_mcnSfamCod: 'LYRA',
            Tck_descrCli:
              'Nel dettaglio delle offerte se faccio Personalizza Layout compare una lista di utenti non corretta, da dove viene presa?',
            TCK_I_TCK_AREA: 'Service - Utilizzo/Varie/Grafiche',
            TCK_I_TCK_TITOLO: 'Elenco utenti layout',
          },
        },
        'http://192.168.1.203:8080'
      );
    else console.error('Errori in invio');
  }
}
