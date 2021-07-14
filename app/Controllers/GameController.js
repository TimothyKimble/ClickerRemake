import { ProxyState } from "../AppState.js";
import { gamesService } from "../Services/GameServices.js";

function _draw(){
  let upgrades = ProxyState.upgrades
  document.getElementById('health').innerText = upgrades.health.toString()
  document.getElementById('upgrades').innerHTML = ` <h3>${upgrades.name}</h3><hr/><img class="w-100" src="${upgrades.img}" alt="">`
}

export default class GamesController{
  constructor(){
    _draw()
  }

  attack(type){
    gamesService.attack(type)
    _draw()
  }
}