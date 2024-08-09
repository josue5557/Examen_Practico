import { Esquema, model} from "mongoose"

export const esquema_alumnos = new Esquema({
    alumno_name:{type:String},
    alumno_last_name:{type:String}
})

const modeloAlumnos = new model('Alumnos', esquema_alumnos)

export { modeloAlumnos };