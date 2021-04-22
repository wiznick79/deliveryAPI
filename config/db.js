const db =  require('../models');
const Role = db.role;

module.exports = {
    // Adds the user and admin roles in the database, if they don't exist
    dbinit : function() {
        Role.estimatedDocumentCount((err, count) => {
            if (!err && count === 0) {
                new Role({name: "user"}).save(err => {
                    if (err) {
                        console.log("error", err);
                    }
                    console.log("Added 'user' to roles");
                });
                new Role({name: "admin"}).save(err => {
                    if (err) {
                        console.log("error", err);
                    }
                    console.log("Added 'admin' to roles");
                });
            }
        })
    }    
}