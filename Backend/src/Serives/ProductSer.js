import GenericSerives from './GenericSerives'
class ProductSer extends GenericSerives{


    constructor(){

        super();
    }
    addProduct=(data)=>this.post("products",data)
    deleteProduct=(_id)=>this.delete("products/"+_id)
    updateProduct=(_id,data)=>this.update("products/"+_id,data)
    getProduct=()=>this.get("products")
}
 let productSer = new ProductSer();

 export default productSer;

