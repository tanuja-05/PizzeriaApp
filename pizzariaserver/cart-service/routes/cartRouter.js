let express=require('express');
const { insertItem, viewCart, deleteItem, updateItem } = require('../controllers/cartController');
cartRouter = express.Router();

cartRouter.post('/insert',insertItem);
cartRouter.get('/view',viewCart);
cartRouter.delete('/delete/:id',deleteItem);
cartRouter.put('/update/:id',updateItem);

module.exports={cartRouter};