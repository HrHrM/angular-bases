import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'phos-counter',
  template: `
  <p>Counter: {{counter}}</p>
<button class = 'btn btn-primary'(click)="increaseBy(1)">+1</button>
<button class = 'btn btn-primary' (click)="resetCounter()">Reset</button>
<button class = 'btn btn-primary' (click)="increaseBy(-1)">-1</button>
  `,
})

export class CounterComponent{
  constructor() { }

  public counter: number = 10;

  public increaseBy( value: number ): void {
    this.counter += value;
  }

  public resetCounter(): void{
    this.counter = 0;
  }


}
