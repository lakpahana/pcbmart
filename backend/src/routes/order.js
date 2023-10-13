const express = require('express');

const router = express.Router();
const OrderController = require('../controllers/order');


router.post('/', OrderController.create)
router.get('/company/:id', OrderController.getOrdersByCompany)
router.get('/buyer/:id', OrderController.getOrdersByBuyer)


module.exports = router;