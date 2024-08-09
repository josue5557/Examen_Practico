import { Esquema, model} from "mongoose"

export const esquema_maestros = new Esquema({
    maestros_name:{type:String},
    maestros_last_name:{type:String}
})

const modeloMaestros = new model('Maestros', esquema_maestros)

export { modeloMaestros };