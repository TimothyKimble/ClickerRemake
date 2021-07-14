import { ProxyState } from "../AppState.js";


class GamesService{
  attack(type){
    if(ProxyState.upgrades.health >0){
    ProxyState.upgrades.health -= ProxyState.upgrades.weapons[type]
    ProxyState.experience += ProxyState.upgrades.weapons[type]
  if (ProxyState.upgrades.health <= 0){
    ProxyState.upgrades.health = 0
    } 
  } 
  }
  spawn(){
    ProxyState.upgrades.health = 100
  }
}

export const gamesService = new GamesService()