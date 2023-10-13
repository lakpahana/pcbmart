require('dotenv').config()
const express = require('express')
const app = express()
const createHttpError = require('http-errors')
const BuyerRouter = require('./routes/buyer')
const CompanyRouter = require('./routes/company')
const ProductRouter = require('./routes/products')
const OrderRouter = require('./routes/order')
const fileUpload = require('express-fileupload');

app.use(fileUpload());

app.use('/uploads/products', express.static('public/products'))


app.use(express.json())

app.use('/api/v1/buyers', BuyerRouter);
app.use('/api/v1/companies', CompanyRouter);
app.use('/api/v1/products', ProductRouter)
app.use('/api/v1/orders', OrderRouter)

app.use((err, req, res, next) => {
    if (createHttpError.isHttpError(err)) {
        res.status(err.status).send({ message: err.message })
    } else {
        res.status(500).send({ message: err.message })
    }
    //error unknown
    res.status(500).send({ message: "Error Unknown" })
})

module.exports = app;