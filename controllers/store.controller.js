const Store = require('../models/store')

function createStore(store, res) {
    console.log(store)
    // get the data from the request's body
    const { name, horario } = store;
    // Checking if the data from the form is valid
    if (!name || !horario) {
        errors = 'Please fill in all required fields';
        console.log(errors);
        res.send(errors);
    }
    // Check if store already exists
    else {
        Store.findOne({ name: name })
            .then(store => {
                // If store exists
                if (store) {
                    errors = 'There is already a store with that name';
                    console.log(errors);
                    res.send(errors);
                }
                // Create the store
                else {
                    const newStore = new Store ({
                        name,
                        horario
                    })
                    newStore.save()
                        .then(() => {
                           // req.flash('success_msg', 'Store created.');
                           // res.redirect('/store/create');
                           console.log(newStore);
                           console.log(name + ' created');
                           res.send(name + ' created');                           
                        })
                        .catch(err => console.log(err));
                }    
            })
            .catch(err => console.log(err));
    }           
}

function updateStore(store, res) {
    console.log(store)
    const { name, horario } = store;
    // Checking if the data from the form is valid
    if (!name || !horario) {
        errors = 'Please fill in all required fields';
        console.log(errors);
        res.send(errors);
    }
    else {
        Store.findOneAndUpdate({ name: name }, {$set: {horario: store.horario }}, { new: true })
            .then(() => {
                console.log(name + ' updated');                  
                res.send(name + ' updated')
            })
            .catch(err => console.log(err));
    } 
}

function deleteStore(store, res) {
    console.log(store)
    const { name } = store;
    Store.findOneAndDelete({ name: name })
        .then(() => {
            console.log(name + ' deleted');                  
            res.send(name + ' deleted')
        })
        .catch(err => console.log(err));
    
}

module.exports = { createStore, updateStore, deleteStore }