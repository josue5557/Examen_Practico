import { Esquema, model} from "mongoose"

export const esquema_director = new Esquema({
    dr_name:{type:String},
    dr_last_name:{type:String}
})

const modeloDirector = new model('Director', esquema_director)

export { modeloDirector };