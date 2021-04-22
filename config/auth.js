module.exports = {
    ensureAuthenticated: function(req, res, next) {
        console.log(req.isAuthenticated());
        if (req.isAuthenticated()) {
            return next();
        }
        req.flash('error_msg', 'Please login to view this page');
        res.redirect('/user/login');
    },

    ensureAuthenticatedAdmin: function(req, res, next) {
        console.log(req.isAuthenticated() && req.user.role === "admin");
        if (req.isAuthenticated() && req.user.role === "admin") {
            return next();
        }
        req.flash('error_msg', 'Please login to view this page');
        res.redirect('/user/login');
    }
}