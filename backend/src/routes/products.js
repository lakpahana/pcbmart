const express = require('express');
const ProductController = require('../controllers/products')

const router = express.Router()

const verifyToken = require('../middlewears/verifyToken')

router.post('/', verifyToken, ProductController.create);
router.put('/:id', ProductController.update)
router.delete('/:id', ProductController.delete)

router.get('/all', verifyToken, ProductController.getAll)

router.get('/:id', ProductController.getOne)
router.get('searchResults', ProductController.search)



module.exports = router;
