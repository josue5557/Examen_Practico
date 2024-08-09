import { Esquema, model} from "mongoose"

export const esquema_limpieza = new Esquema({
    limpieza_name:{type:String},
    limpieza_last_name:{type:String}
})

const modeloLimpieza = new model('Limpieza', esquema_limpieza)

export { modeloLimpieza };