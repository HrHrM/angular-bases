import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})

export class DbzMainPageComponent {

  constructor(private dbzService: DbzService){


  }
  get characters(): Character[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(characterID: string): void{
    this.dbzService.onDeleteCharacter(characterID);
  }

  onNewCharacter(character: Character):void{
    this.dbzService.onNewCharacter(character);
  }


}
