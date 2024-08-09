import { model} from "mongoose"
import { esquema_director } from "./director.model.js";

const modeloDirector = new model('Director', esquema_director)

export { modeloDirector };