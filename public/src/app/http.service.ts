import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
    // this.getPokemon();
    // this.sameAbility();
  }

  getPokemon() {
    return this._http.get('https://pokeapi.co/api/v2/pokemon/6/');
    // let charizard = this._http.get('https://pokeapi.co/api/v2/pokemon/6/');
    // charizard.subscribe(data => {
    //   console.log(`My favorite pokemon is ${data.name} and my favorite attack is ${data.abilities[1].ability.name}`)
    // });
  }

  sameAbility() {
    return this._http.get('https://pokeapi.co/api/v2/ability/66/')
  //   pokemonWithSame.subscribe(data => {
  //     console.log("List of Pokemon who share that ability:")
  //     for(let i = 0; i < (data.pokemon).length; i++){
  //       console.log(data.pokemon[i].pokemon.name)
  //     }

  //   })
  }
}
