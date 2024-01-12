import CnxMongoDB from "../../DBMongo.js"

class ModelMongoDB {

    obtenerPalabras = async () => {
        if(!CnxMongoDB.connection) return []
        const palabras = await CnxMongoDB.db.collection('palabras').find({}).toArray()
        //return palabras[0].palabra
        let frase = ""
        for (let i=0; i < palabras.length;i++){
            frase += palabras[i].palabra + " "
        }
        return frase || "Aún no se ingresaron palabras"
    }

    guardarPalabra = async palabra => {
        if(!CnxMongoDB.connection) return {}
        palabra.timestamp = parseInt(Date.now())
        await CnxMongoDB.db.collection('palabras').insertOne(palabra)
        return palabra
    }

}

export default ModelMongoDB