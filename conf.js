module.exports = {
    //server running port
    api:{
        port:5555
    },
    //Product Module ip and port
    productCreationAcceptMailsentUrl:"http://localhost:8000/v1/product/create/activation?",
    productDeletionAcceptMailsentUrl:"http://localhost:8000/v1/product/delete/activation?",
    updateProductAcceptMailsentUrl:"http://localhost:8000/v1/product/update/activation?",
    userActivationUrl:"http://localhost:9099/v1/user/activation?",//users module
}