import { Component, inject } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { PokemonData } from '../pokemon-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css'
})
export class PokemonDetailsComponent {
  pokeService: PokemonService = inject(PokemonService);

  pokeData: string= "";

  constructor(private route: ActivatedRoute){
    this.pokeService.fetchPokemon(route.snapshot.params['id']).subscribe(
      data => (this.pokeData = JSON.stringify(data))
    );
  }
}
