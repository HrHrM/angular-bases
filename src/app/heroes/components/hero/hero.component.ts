import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {


  public name: string = 'phos';
  public age: number = 100;

  get capitalizedName(): string {
    return this.name.toUpperCase();

  }

  getHeroDesc(): string {
    return `${ this.name } / ${ this.age }`
  }

  changeHero(newHero: string): void {
    this.name = newHero.toLocaleLowerCase();
  }

  changeAge(newAge: number): void {
    this.age = newAge;
  }

  resetForm(): void {
    this.name = 'phos';
    this.age = 100;
  }

}
