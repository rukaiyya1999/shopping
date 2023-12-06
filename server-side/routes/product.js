
const Product = require("../models/product");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE 
router.post("/", verifyTokenAndAdmin, async(req, resp)=>{
const newProduct = new Product(req.body)
try{
const savedProduct = await newProduct.save()
resp.status(200).json(savedProduct)
}catch(err){
    resp.status(500).json(err)
}
})

//UPDATE

router.put("/:id", verifyTokenAndAdmin, async (req, resp) => {

  try {
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    resp.status(200).json(updateProduct);
  } catch (err) {
    resp.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET Product
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL Products
router.get("/", async (req, res) => {
  const query = req.query.new;
  const queryCategory = req.query.category;
  try {
    let products
if(query){
    products = await Product.find().sort({createdAt: -1}).limit(1)
}else if(queryCategory){
    products = await Product.find({categories:{
        $in :[queryCategory],
    }})
}else{
    products = await Product.find();
}
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router