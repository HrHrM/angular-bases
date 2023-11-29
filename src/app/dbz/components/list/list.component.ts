import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDeleteID: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [
    // {
    // name: 'Antarc',
    // power: 400,
    // },
];

  // onDeleteID = Index value : number;

  onDeleteCharacter(characterID?:string):void {

    if(!characterID) return;
    //TODO: Emitir el ID del personaje
    console.log({characterID});
    this.onDeleteID.emit(characterID);
  }
}
