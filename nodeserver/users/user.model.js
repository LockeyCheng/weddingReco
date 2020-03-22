const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, unique: true, required: true },
    mail: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    usertype: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String},
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);