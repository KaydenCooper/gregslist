
import CarsController from "./Controllers/CarsController.js";
import JobsController from "./Controllers/JobsController.js";
import HouseController from "./Controllers/HouseController.js";
class App {
  carsController = new CarsController();
  jobsController = new JobsController();
  houseController = new HouseController();
}

window["app"] = new App();

