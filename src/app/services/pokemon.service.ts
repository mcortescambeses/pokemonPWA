import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20';

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getPokemonById(id: number): Observable<any> {
  return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${id}`);
}

}
