const authController = require("../controller/triplan_controller.js");

module.exports = function(app, passport) {
    app.get('/register', authController.register)
    app.get('/login', authController.login);

    app.post('/register', passport.authenticate('local-signup', {
        successRedirect: '/dashboard',
        failureRedirect: '/register'
    }));

    app.get('/logout',authController.logout);

    app.post('/login', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',
        failureRedirect: '/register'
    }));

    app.get('/dashboard', isLoggedIn, authController.getTrips);
    app.post('/dashboard/createtrip', isLoggedIn, authController.createtrip);

    app.post('/dashboard/update/:id', isLoggedIn, authController.update);
    app.post('/dashboard/delete/:id', isLoggedIn, authController.delete);

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) return next();
        res.redirect('/login');
    }

}