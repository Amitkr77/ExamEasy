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
        phone: {
            type: Number,
            required: true
        },
        password: {
            type: String,
            required: true,
            unique: true
        }
    }, { timestamps: true })

    const userModel = mongoose.model("user1", schema)
    export default userModel;