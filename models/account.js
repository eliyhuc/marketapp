const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fullname: String,
    email: String,
    password: String,
    createdAt: {type: Date, default: Date.now},
    isConfirmed: {type: Boolean, default: true}
});

module.exports = mongoose.model('Account', accountSchema);