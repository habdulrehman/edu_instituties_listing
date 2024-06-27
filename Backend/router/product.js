const express = require('express')
const {getProducts, createProduct, deleteProduct, updateProduct} = require('../controller/product')
const router = express.Router()



router.get('/product', getProducts)
router.post('/create', createProduct)
router.delete('/product/:id', deleteProduct)
router.patch('/product/:id', updateProduct)

module.exports = router