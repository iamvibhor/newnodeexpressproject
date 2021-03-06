const ProductRepository = require('../repository/productRepository')
const repository = new ProductRepository();

const ProductApi = (app)=>{
    app.get('/products',(req,res)=>{
        repository.findAllProducts().then(data =>res.json(data))
    })

    app.get('/products/:productName',(req,res)=>{
        repository.findAllProductsByName(req.params['productName']).then(data =>res.json(data))
    })

    app.get('/products/find/:price',(req,res)=>{
        repository.findAllProductsByPrice(req.params['price']).then(data =>res.json(data))
    })

    // app.get('./products/:productName',(req,res)=>{
    //     repository.findAllProducts(req.params["productName"]).then(data=>res.json(data))
    // })
    app.post('/products',(req,res)=>{
        repository.saveProduct(req.body).then(data =>res.json(data))
    })

    // app.put('/products/:pr',(req,res)=>{
    //     repository.saveProduct(req.body).then(data =>res.json(data))
    // })
    app.delete('/products/:productId',(req,res)=>{
        repository.deleteProduct(req.params['productId']).then(data =>res.json(data))
    })
}
module.exports = ProductApi