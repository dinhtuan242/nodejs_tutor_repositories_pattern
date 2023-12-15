import mongoose, { Schema, ObjectId } from "mongoose";
// import { isEmail } from "validator";
import isEmail from "validator/lib/isEmail.js"

const Student = mongoose.model('Student',
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
        languages: {
            type: [String]
        },
        gender: {
            type: String,
            // enum: {
            //     value: ['Male', 'Female'],
            //     message: '{VALUE} is not supported'
            // }
        },
        phoneNumber: {
            type: String,
            validate: {
                validator: (phoneNumber) => phoneNumber.length >= 5,
                message: 'Phone number at least 5 characters'
            }
        },
        address: {
            type: String
        }
    }, { autoCreate: false, autoIndex: true })
)

export default Student
