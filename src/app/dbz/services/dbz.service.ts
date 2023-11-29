import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Phos',
    power: 130,

  },{
    id: uuid(),
    name: 'Cinnabar',
    power: 150,
  },{
    id: uuid(),
    name: 'Ruby',
    power: 20,
  }];

  onNewCharacter(character: Character):void{
    console.log('Añadiendo gema a la main page:');
    const newCharacter:Character = {
      id: uuid(),
      ...character,
    }
    this.characters.push(newCharacter);
  }

  onDeleteCharacter(characterID: string): void{


    console.log('Delete');
    this.characters = this.characters.filter(character => character.id !== characterID);
    // console.log('Personaje eliminado:');


  }


  constructor() { }

}
