import { ProxyState } from "../AppState.js";
import Upgrades from "../Models/Upgrades.js";

class GamesService{
  attack(type){
    if(ProxyState.upgrades.health >=0){
    ProxyState.upgrades.health -= ProxyState.upgrades.weapons[type]
    ProxyState.experience += ProxyState.upgrades.weapons[type]
    if(ProxyState.upgrades.health <= 0){
      document.getElementById('disabled').innerHTML = `disabled`
    }
  }
  }

}

export const gamesService = new GamesService()