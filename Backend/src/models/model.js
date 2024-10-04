import mongoose from "mongoose";

const schema = mongoose.Schema({
    username: {
        type: String,
        required: true
    }
    , email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamp: true })

const userModel = mongoose.model("user1", schema)
export default userModel;