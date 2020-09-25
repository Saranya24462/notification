var ApiActions = require("./action.js");
var ApiRoutes = function (app) {
    this.app = app;
    this.userActionInstance = new ApiActions(app);
};
module.exports = ApiRoutes;


ApiRoutes.prototype.init = function (app) {

    var self = this;
    var app = self.app;


    app.get('/', function (req, res) {
        res.send({'test': 'Ok'})
    });

    app.post('/v1/invite/user', function (req, res) {
        res.send("Invite Mail sent");
        self.userActionInstance.inviteUser(req,res)
    });

    app.post('/v1/create/product', function (req, res) {
        res.send("Invite Mail sent");
        self.userActionInstance.productCreationMail(req,res)
    });

    app.post('/v1/update/product', function (req, res) {
        res.send("Invite Mail sent");
        self.userActionInstance.productUpdationMail(req,res)
    });

    app.post('/v1/delete/product', function (req, res) {
        res.send("Invite Mail sent");
        self.userActionInstance.productDeletionMail(req,res)
    });

}