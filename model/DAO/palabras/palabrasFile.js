import fs from 'node:fs';


class ModelFile {

    constructor() {
        this.nombreArchivo = 'frases.json'
    }

    leerArchivo = async nombre => {
        let palabras = []
        try {
            palabras = JSON.parse(await fs.promises.readFile(nombre, 'UTF-8'))
        }
        catch {
            console.log('Error al leer el archivo')
        }
        return palabras
    }

    escribirArchivo = async (nombre, palabras) => {
        await fs.promises.writeFile(nombre, JSON.stringify(palabras, null, '\t'))
    }

    obtenerPalabras = async () => {
        const palabras = await this.leerArchivo(this.nombreArchivo)
        let frase = ""
        for (let i=0; i < palabras.length;i++){
            frase += palabras[i].palabra + " "
        }
        return frase || "Aún no se ingresaron palabras"

    }

    guardarPalabra = async palabra => {
        const palabras = await this.leerArchivo(this.nombreArchivo)

        palabra.id = String(parseInt(palabras[palabras.length-1]?.id || 0) + 1)
        palabra.timestamp = parseInt(Date.now())
        palabras.push(palabra)

        await this.escribirArchivo(this.nombreArchivo, palabras)

        return palabra
    }

}

export default ModelFile;
