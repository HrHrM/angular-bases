import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public gemNames: string[] = ['Jade', 'ghost quartz', 'Gosehnite', 'Ruby'];
  public deletedGem?: string;

  removeLastGem(): void{
    this.deletedGem = this.gemNames.pop();
    console.log(this.deletedGem);
  }

}
