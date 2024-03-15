import { Component } from '@angular/core';

@Component({
  selector: 'app-fake-lyra-xiframe',
  templateUrl: './fake-lyra-xiframe.component.html',
  styleUrls: ['./fake-lyra-xiframe.component.scss'],
})
export class FakeLyraXIFrameComponent {
  show = false;
  expanded = false;

  showSofia() {
    this.show = !this.show;
  }
}
