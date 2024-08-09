import { modeloDirector } from "../models/director.model.js";

const test = () => {
    console.log("Funciona la conexion a director")
}

export default test

modeloDirector.create({
    director_name: "David",
    director_last_name: "Zapata"
})