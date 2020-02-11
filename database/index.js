const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jean:qwe@cluster0-7b59l.gcp.mongodb.net/twitter?retryWrites=true&w=majority')
        .then( () => console.log('connexion db ok !'))
        .catch( err => console.log(err));