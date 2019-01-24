const models = require("../models");
const Trip = models.trip;
let controller = {};

controller.register = function(req, res) {
    res.render('register');
}

controller.login = function(req, res) {
    res.render('login')
}

controller.createtrip = function(req, res) {
     let data = {
        user_id: req.session.passport.user, // catch error later
        trip_name: req.body.trip_name,
        departDate: req.body.departDate,
        returnDate: req.body.returnDate,
        locations: req.body.locations,
        activities: req.body.activities,
        isPrevious: req.body.isPrevious
    };

    Trip.create(data).then(function (newTrip, created) {
        if (!newTrip) {
            return false
        }
        if (newTrip) {
            res.redirect("/dashboard")
            return true;
        }
    });
}

controller.getTrips = function(req, res, done) {
   Trip.findAll(
       {
           where: {
               user_id: req.session.passport.user // catch error later
           }
       }
   ).then(function (trips) {
       if (!trips) {
           return done(null, false);
       }
       if (trips) {
           res.render('dashboard', {
                trip_id: req.session.trip_id,
                trip_name: req.session.trip_name,
                departDate: req.session.departDate,
                returnDate: req.session.returnDate,
                locations: req.session.locations,
                activities: req.session.activities,
                isPrevious: req.session.isPrevious,
                trips: trips
           })

           return
       }
   });
}

controller.update = function(req, res) {
    Trip.update(
        {
            isPrevious: req.body.isPrevious
        }, 
        {
            where: {
                trip_id: req.params.id 
            }
        }
    ).then(function(result) {
        console.log(result)
        res.redirect('/dashboard')
    })
}

controller.delete = function(req, res) {
    Trip.destroy(
        {
            where: {
                trip_id: req.params.id
            }
        }
    ).then(function() {
        res.redirect('/dashboard')
    })
}

controller.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/');
    });
}

module.exports = controller