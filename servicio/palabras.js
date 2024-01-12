import ModelFactory from '../model/DAO/palabras/palabrasFactory.js';
import config from '../config.js';
import validar from './validaciones/palabra.js';


class Servicio {

    constructor() {
        this.model = ModelFactory.get(config.MODO_PERSISTENCIA)
    }

    obtenerPalabras = async () => {
        
            const palabras = await this.model.obtenerPalabras()
            return palabras
        
    }

    guardarPalabra = async palabra => {
        const error = validar(palabra)
        if(!error) {
            const palabraGuardado = await this.model.guardarPalabra(palabra)
            return palabraGuardado
        }
        else {
            throw new Error(error.details[0].message)
        }
    }
}

export default Servicio;

