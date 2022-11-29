import { Component } from '@angular/core';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent {
  public pokemons: Pokemon[] = [
    {
      image:
        'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
      number: 1,
      name: 'Bulbasaur',
      types: [Type.Grass, Type.Poison],
    },
    {
      image:
        'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
      number: 1,
      name: 'Bulbasaur',
      types: [Type.Grass, Type.Poison],
    },
  ];
}

interface Pokemon {
  image: string;
  number: number;
  name: string;
  types: Type[];
}

enum Type {
  Grass = 'Grass',
  Poison = 'Poison',
}
