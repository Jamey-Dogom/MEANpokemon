import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Pokemon';
  pokemon = {}
  sharedPokemon = []

  constructor(private _httpService: HttpService) {
  }

  ngOnInit(): void {
    this.getTasksFromService();
    this.getSharedPokemon();
  }

  getTasksFromService() {
    // calling our get Pokemon method and receive an observable
    let observable = this._httpService.getPokemon()
    observable.subscribe(data => {
      console.log(`My favorite pokemon is ${data.name} and my favorite attack is ${data.abilities[1].ability.name}`)
      this.pokemon = data
    })
  }

  getSharedPokemon() {
    let observable = this._httpService.sameAbility()
    observable.subscribe(data => {
      console.log("List of Pokemon who share that ability:")
      for (let i = 0; i < (data.pokemon).length; i++) {
        this.sharedPokemon.push(data.pokemon[i].pokemon.name)
      }
    });
  }

}

