const PersonController = require('../controllers/person.controller');  //Import the code from Code Block 1
module.exports = (app) => {
    app.post("/api/products", PersonController.createProduct);
    app.get("/api/products", PersonController.getAllPeople);
    app.get("/api/products/:id", PersonController.getOneProduct);
}