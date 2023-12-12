import mongoose, { Schema, ObjectId } from "mongoose";

const Klass = mongoose.model('Klass',
    new Schema({
        id: { type: ObjectId },
        name: {
            type: String,
            required: true,
            validate: {
                validator: (value) => value.length >= 3,
                message: 'Name must be at least 3 characters'
            }
        }
    }, { autoCreate: false, autoIndex: true })
)

export default Klass
