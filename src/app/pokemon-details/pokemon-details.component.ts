import { Component, OnInit, AfterViewInit, inject } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { PokemonData, PokemonResponse } from '../pokemon-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css',
})
export class PokemonDetailsComponent {
  pokeService: PokemonService = inject(PokemonService);

  pokeData: PokemonData | undefined = undefined;
  pokeId: number;
  pokemon: PokemonResponse | undefined = undefined;
  isLoading: boolean;
  error: any;

  constructor(private route: ActivatedRoute) {
    this.pokeId = this.route.snapshot.params['id'];
    this.isLoading = false;
  }

  ngOnInit() {
    while (this.isLoading) {
      console.log('Loading.');
      setTimeout(() => {}, 1);
    }
  }

  ngAfterViewInit() {
    this.pokeService
      .fetchPokemon(this.pokeId)
      .subscribe(({ data, loading, error }) => {
        this.pokemon = data;
        console.log(data);
        this.isLoading = loading;
        this.error = error;
      });
  }
}
