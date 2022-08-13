const Product = require("../models/person.model")
module.exports = {
    createProduct: (req, res) => {
        Product.create(req.body)
    .then((newProduct) => res.json(newProduct))
    .catch((err) =>console.log(err));
    },
    getAllPeople: (req, res) => {
        Product.find({}).then(products=>{
            console.log(products);
            res.json(products);
        })
        .catch(err =>{
            console.log(err)
            res.json(err)
        })
    },
    getOneProduct: (req, res) => {
        Product.findOne({_id: req.params.id})
        .then((oneProduct)=> res.json(oneProduct))
        .catch((err) => console.log(err));
    }
};

