import { modeloLimpieza } from "../models/limpieza.model.js";

const test = () => {
    console.log("Funciona la conexion a limpieza")
}

export default test

modeloLimpieza.create({
    limpieza_name: "Gloria",
    limpieza_last_name: "Avilez"
})