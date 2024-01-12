import Joi from 'joi';


const validar = palabra => {
    const palabraSchema = Joi.object({
        palabra: Joi.string().required(),
    })

    const { error } = palabraSchema.validate(palabra)
    return error
}

export default validar;