import { Esquema, model} from "mongoose"

export const esquema_jefecarre = new Esquema({
    jefecarre_name:{type:String},
    jefecarre_last_name:{type:String}
})

const modeloJefecarre = new model('Jefecarre', esquema_jefecarre)

export { modeloJefecarre };