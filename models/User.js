const mongoose = require("mongoose");
const collection = "users";
const randomToken = require('random-token');

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            unique: true,
            default: "user"+randomToken(16),
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true,
            select:false,
        },
        cpf: {
            type: String,
            required: true,
            unique: true,
        },
    },
    {
        createdAt: {
            type: Date,
            default: Date.now,
        }
    }
)

module.exports = mongoose.model(collection, UserSchema);