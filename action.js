const nodemailer = require('nodemailer');
var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "contentmanagementsystemusers@gmail.com",
        pass: "Welcome123@"
    }
});

var ApiActions = function (app) {
    this.app = app;
    this.conf = app.conf;
};
module.exports = ApiActions;


ApiActions.prototype.init = function () {

}


ApiActions.prototype.inviteUser = function (inputData,result) {
    console.log("input",inputData.body)
    var self=this;
    var input=inputData.body;
    var link=self.conf.userActivationUrl+"email="+input.email
    console.log(link)
    const message = {
        from: 'contentmanagementsystemusers@gmail.com',
        to: input.email,
        subject: 'Welcome to Content Management System',
        text: ' Hii, Happy to Invite You '+"   "+ "  Please Join Click the Link  "+ link
    };
    smtpTransport.sendMail(message, function(err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log(info,"info");
        }
    });
}

ApiActions.prototype.productCreationMail = function (inputData,result) {

    var self=this;
    console.log("input",inputData.body)
    var input=inputData.body;

    var link=self.conf.productCreationAcceptMailsentUrl+"email="+input.email+"&&"+"productName="+input.productName+"&&"+"productDesc="+input.productDesc+"&&"+"productPrice="+input.productPrice+"&&"+"username="+input.username

    const message = {
        from: 'contentmanagementsystemusers@gmail.com', // Sender address
        to: input.email,
        subject: 'Product Creation',
        text: input.username +"  " + "Request to created product " + "  "+ input.productName + "  desc is" + input.productDesc +" " +" Please accept the Product Created "+" "+" "+"Click the link"+" "+" "+link
    }

    smtpTransport.sendMail(message, function(err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log(info,"info");
        }
    });
}

ApiActions.prototype.productDeletionMail = function (inputData,result) {

    var self=this;
    console.log("input",inputData.body)
    var input=inputData.body;
    var link=self.conf.productDeletionAcceptMailsentUrl+"email="+input.email+"&&"+"productName="+input.productName+"&&"+"username="+input.username

    const message = {
        from: 'contentmanagementsystemusers@gmail.com', // Sender address
        to: input.email,
        subject: 'Product Deletion',
        text: input.username +"  " + "Requested to Delete product" + "  "+ input.productName + "Please accept the product Deletion Information Clink the link "+ "   "+link
    }

    smtpTransport.sendMail(message, function(err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log(info,"info");
        }
    });
}

ApiActions.prototype.productUpdationMail = function (inputData,result) {

    console.log("input for productUpdationMail",inputData.body)

    var self=this;
    var input=inputData.body;

    var link=self.conf.updateProductAcceptMailsentUrl+"email="+input.email+"&&"+"productName="+input.productName+"&&"+"productDesc="+input.productDesc+"&&"+"productPrice="+input.productPrice+"&&"+"username="+input.username

    const message = {
        from: 'contentmanagementsystemusers@gmail.com',
        to: input.email,
        subject: 'Product Updation',
        text: input.username +"  " + "Request to Update product" + "  "+ input.productName + "  desc is" + input.productDesc +" "+ " Please accept for product details " + "updation clink the below link"+"  "+" "+" "+link
    }

    smtpTransport.sendMail(message, function(err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log(info,"info");
        }
    });
}