import { bindMethodsController } from "../utils/bind";

class Controller {
  constructor(){
    bindMethodsController(this);
  }
}

export default Controller;