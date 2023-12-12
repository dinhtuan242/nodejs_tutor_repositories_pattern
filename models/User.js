import mongoose, { Schema, ObjectId } from "mongoose";
import { isEmail } from "validator";
// import isEmail from "validator/lib/isEmail.js";

const User = mongoose.model('User',
    new Schema({
        id: { type: ObjectId },
        name: {
            type: String,
            required: true, // not null
            validate: {
                validator: (value) => value.length > 3,
                message: 'username must be at least 3 characters'
            }
        },
        email: {
            type: String,
            validate: {
                validator: (value) => isEmail,
                message: 'Email is incorrect format'
            }
        },
        password: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String
        },
        address: {
            type: String
        }
    }, { autoCreate: false, autoIndex: true })
)

export default User
