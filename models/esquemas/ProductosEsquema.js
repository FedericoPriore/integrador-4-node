import mongoose from "mongoose";


const ProductosEsquema = mongoose.Schema(
    {
        nombre: String,
        precio: Number,
        stock: Number,
        categoria: String,
        detalles: String,
        foto: String,
        envio: Boolean
    },
    {
        timestamps: true, 
        versionKey: false
    }
    
)

export default ProductosEsquema