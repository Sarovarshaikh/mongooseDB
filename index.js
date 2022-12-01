const mongoose = require("mongoose");

await mongoose.connect("mongodb://localhost:27017/e-comm"); //1)mongoose.schema 2)mongoose.model
let productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

const saveINDB = () => {
 let productModal = mongoose.model("products", productSchema);
  let data = new productModal({
    name: "srvr10",
    price: 5023,
    brand: "BMW",
    category: "maruti",
  });

  let resul = await data.save();
  console.log(resul);
};
// saveINDB() this is insert
const updateIndb = async ()=>{
    let productModal = mongoose.model("products", productSchema);
    let data = await productModal.updateOne({name:'note 7'},{$set:{price:5000}})
    console.log(data);


}
updateIndb()
