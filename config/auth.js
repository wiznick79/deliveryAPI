/**
 * Ensures that there is an authenticated user.
 * Used to protect routes.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
function ensureAuthenticated(req, res, next) {
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash('error_msg', 'Please login to view this page');
    res.redirect('/user/login');
};

/**
 * Ensures that there is an authenticated user with admin role.
 * Used to protect routes.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
function ensureAuthenticatedAdmin(req, res, next) {
    console.log(req.isAuthenticated() && req.user.role === "admin");
    if (req.isAuthenticated() && req.user.role === "admin") {
        return next();
    }
    req.flash('error_msg', 'Please login to view this page');
    res.redirect('/user/login');
};

module.exports = { ensureAuthenticated, ensureAuthenticatedAdmin }