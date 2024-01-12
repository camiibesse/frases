import Servicio from '../servicio/palabras.js';

class Controlador {

    constructor() {
        this.servicio = new Servicio()
    }

    obtenerPalabras = async (req,res) => {
        const {id} = req.params
        const palabras = await this.servicio.obtenerPalabras(id)
        res.json(palabras)
    }

    guardarPalabra = async (req,res) => {
        try {
            const palabra = req.body
            const palabraGuardado = await this.servicio.guardarPalabra(palabra)
            res.json(palabraGuardado)
        }
        catch(error) {
            res.json({ errMsg: error.message })
        }
    }   
}


export default Controlador;