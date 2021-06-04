const mongoose = require('mongoose');
const randomToken = require('random-token');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    login: {
        type: String,
        unique: true,
        default: "user"+randomToken(16),
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select:false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const User = mongoose.model('User', UserSchema);
module.exports = User;