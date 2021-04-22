const express = require('express')
const ProductApi =  require('./api/productApi')

const app = express()
app.use(express.json())
ProductApi(app)

app.listen(3000, ()=>console.log("server started"))