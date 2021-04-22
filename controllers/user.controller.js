const bcrypt = require('bcryptjs')
const UserModel = require('../models/user')

/**
 * Register a new user
 * @param {*} req 
 * @param {*} res 
 */
function registerUser (req, res) {
    console.log(req.body)
    // get the data from the request's body
    const { name, email, password, password2 } = req.body;
    let errors = [];
    // Checking if the data from the form is valid
    if (!name || !email || !password || !password){
        errors.push('Please fill in all required fields')
    }
    if (password !== password2) {
        errors.push('Passwords do not match')
    }
    if (password.length < 6) {
        errors.push('Password should be at least 6 chars')        
    }
    // Show the errors, if they exist
    if (errors.length > 0) {
        res.redirect('/user/register/?error=' + errors);
    }
    // Check if user is already registered
    else {
        user = UserModel.findOne({ email: email})
            .then(user => {
                // If email is in use
                if (user) {                    
                    errors.push('Email is already registered');
                    console.log(errors);
                    res.redirect('/user/register/?error=' + errors);
                }
                // if there are no users, create a user
                else {
                    const newUser = new UserModel ({
                        name,
                        email, 
                        password,
                    })
                    // Hash the password and save the user in db
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) throw err;
                            newUser.password = hash;
                            console.log(newUser);
                            newUser.save()
                                .then(() => {
                                    req.flash('success_msg', 'Registration successful, please login.');
                                    res.redirect('/user/login');
                                })
                                .catch(err => console.log(err));
                        })
                    })        
                }    
            })
    }   
}

/**
 * Logout the user
 * @param {*} req 
 * @param {*} res 
 */
function logoutUser (req, res) {
    console.log('User logged out');
    req.logout();
    res.redirect('/user/login');
}

module.exports = { registerUser, logoutUser }