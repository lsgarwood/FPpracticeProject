const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const citizenSchema = new Schema({
    citizenID: "String",
    forenames: "String", 
    surname: "String",
    homeAddress: "String", 
    dateOfBirth: "String",
    placeOfBirth: "String",
    sex: "String"
});

const citizen = model('citizen', citizenSchema);

module.exports = citizen;
