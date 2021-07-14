
export default class Upgrades{
  constructor(name, health, img, sword, shield, enchant){
    this.name = name;
    this.health = health;
    this.img = img;
    this.weapons = {
      sword: sword,
      shield: shield,
      enchant: enchant,
    }
  }
}