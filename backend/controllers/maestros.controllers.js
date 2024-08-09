import { modeloMaestros } from "../models/maestros.model.js";

const test = () => {
    console.log("Funciona la conexion a maestros")
}

export default test

modeloMaestros.create({
    maestros_name: "Jessica",
    maestros_last_name: "Benavidez"
})