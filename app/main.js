import ValuesController from "./Controllers/ValuesController.js";
import GamesController from "./Controllers/GameController.js";
class App {
  valuesController = new ValuesController();

  gamesController = new GamesController();
}

window["app"] = new App();
