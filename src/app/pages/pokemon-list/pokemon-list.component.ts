import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
 animations: [
  trigger('fadeIn', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('500ms ease-out', style({ opacity: 1 }))
    ])
  ])
]


})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  viewMode: 'cards' | 'table' = 'cards';
  loading = true;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loading = true;
    this.pokemonService.getPokemons().subscribe(data => {
      this.pokemons = data.results.map((pokemon: any, index: number) => ({
        ...pokemon,
        id: index + 1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
      }));
      this.loading = false;
    });
  }
}
