import { Component, inject } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { CommonModule } from '@angular/common';
import { PokemonData } from '../pokemon-data';

@Component({
  selector: 'pokemon-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {
  pokeService: PokemonService = inject(PokemonService);
  pokeList: PokemonData[];
  constructor(){
    this.pokeList = this.pokeService.getPokemons()
  }

}
