import { modeloAlumnos } from "../models/alumnos.model.js";

const test = () => {
    console.log("Funciona la conexion a alumnos")
}

export default test

modeloAlumnos.create({
    alumno_name: "Josue",
    alumno_last_name: "Guerrero"
})