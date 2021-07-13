const Role = require("../models/role");
const Slot = require("../models/slot");

async function dbinit() {
    // Adds the user and admin roles in the database, if they don"t exist
    await Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({ name: "user" }).save((err) => {
                if (err) {
                    console.log(err);
                }
                console.log("Added user to roles");
            });
            new Role({ name: "admin" }).save((err) => {
                if (err) {
                    console.log(err);
                }
                console.log("Added admin to roles");
            });
        }
    });
    // Deletes old slots
    await Slot.deleteMany({ date : { $lt : Date.now()} }, (err) => {
        if (err) {
            console.log(err);
        }
    });
}

module.exports = { dbinit };