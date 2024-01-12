import ModelMongoDB from "./palabrasMongoDB.js";
import ModelFile from "./palabrasFile.js";

class ModelFactory {
    static get(tipo) {
        switch (tipo) {
           
            case 'FILE':
                console.log('**** Objeto palabras Persistiendo en File System ****')
                return new ModelFile()

            case 'MONGODB':
                console.log('**** Objeto palabras Persistiendo en MongoDB ****')
                return new ModelMongoDB()

            default:
                console.log('**** Persistiendo en File System (default) ****')
                return new ModelFile()
        }
    }
}

export default ModelFactory;