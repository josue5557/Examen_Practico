import { modeloRector } from "../models/rector.model.js";

const test = () => {
    console.log("Funciona la conexion a rector")
}

export default test

modeloRector.create({
    rector_name: "Ivan",
    rector_last_name: "Montana"
})