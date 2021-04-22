const StoreModel = require('../models/store')

async function getAllStores (req, res) {
    try {
        const stores = await StoreModel.find({});
        console.log(stores);
        res.send(stores);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

async function getStore (req, res) {
    let id = req.params.id;
    console.log(id);
    try {
        let store = await StoreModel.findById(id)        
        console.log(store);                          
        res.send(store)        
        
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

async function createStore(store, res) {
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
        await StoreModel.findOne({ name: name })
            .then(store => {
                // If store exists
                if (store) {
                    errors = 'There is already a store with that name';
                    console.log(errors);
                    res.send(errors);
                }
                // Create the store
                else {
                    const newStore = new StoreModel ({
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

async function updateStore(req, res) {
    console.log(req.body)
    const id = req.params.id;
    const { name, horario } = req.body;
    // Checking if the data from the form is valid
    if (!name || !horario) {
        errors = 'Please fill in all required fields';
        console.log(errors);
        res.send(errors);
    }
    else {
        try {
            let store = await StoreModel.findOneAndUpdate({ _id: id }, {$set: {name: name, horario: horario }}, { new: true })
            console.log(store.name + ' updated');                  
            res.send(store);
        } catch (err) {
            console.log(err);
            res.status(500).send(err);
        } 
    } 
}

async function deleteStore(req, res) {    
    let id = req.params.id;
    console.log('Trying to delete store with id: ' + id)
    try {
        let store = await StoreModel.findByIdAndDelete(id)
        console.log(store.name + ' deleted');                  
        res.send(store.name + ' deleted');
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }  
}

module.exports = { getAllStores, getStore, createStore, updateStore, deleteStore }