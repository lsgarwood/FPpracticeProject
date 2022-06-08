const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/citizentest', {useNewUrlParser: true}, (err) => {
    if(err){
        console.log("Error!");
    } else {
        console.log("No error!");
    }
});

module.exports = mongoose;