import { Schema } from 'mongoose'

const user = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 4,
        maxLength: 16
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
    }
}, { versionKey: false })

export default user