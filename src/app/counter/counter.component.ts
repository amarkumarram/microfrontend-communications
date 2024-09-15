import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  public counter = 0;

  constructor() {
    window.addEventListener("controlMfeCounter", () => {
      this.handleCounter();
    });
  }

  handleCounter() {
    this.counter += 1;
  }

  handleHostText (e: any) {
    const customEvent = new CustomEvent("controlHostText", {detail: e?.target?.value});
    window.dispatchEvent(customEvent);
  }
}
