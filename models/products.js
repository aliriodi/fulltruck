import { Schema, model, models } from 'mongoose'


const ProductsSchema = new Schema(
  {
       
    text: {
      type: String,
      },
    image:{
        type: String,
      }
    
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

// error poco frectuente de versionado de modelos por eso etsa esto, pero revisar si puedo armarlo como lo anterior
const Product = models.Product || model('Products', ProductsSchema)

export default Product