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
      "message",
      (event) => {
        console.log(`messaggio da iFrameAPP! Origine: ${event.origin}`)
        console.log(event)
      },
      false,
    );
  }

  sendMessage() {
    console.log('Invio in corso');
    if (window)
      (
        window!.document!.getElementById('myiFrame')! as HTMLIFrameElement
      ).contentWindow!.postMessage('Ciao!', 'http://localhost:4200');
    else console.error('Errori in invio');
  }
}
