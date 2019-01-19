let controller = {};

controller.register = function(req, res) {
    res.render("register");
}

controller.login = function(req, res) {
    res.render("login")
}

controller.dashboard = function(req, res) {
    res.render('dashboard');
}

controller.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/');
    });
}

module.exports = controller