const ProductRepository = require('./repository/productRepository');

const productRepository = new ProductRepository();
// productRepository.findAllProducts().then(data =>
//     console.log(data) );

//  productRepository.saveProduct({
//      productId:9,
//      productName:'BlackBerry',
//      price:20784,
//      description:'BlackBerry v18'
//  }).then(data =>
//     console.log(data))   
// productRepository.updateProduct({
//    productId:8,
//    productName:'myPhone',
//    price:20784,
//    description:'myPhone v18'
// }).then(data =>
//   console.log(data))   

//  productRepository.findAllProductsByName('Iphone12').then(data =>
//     console.log(data) );

productRepository.deleteProduct(8).then(data =>
   console.log(data) );