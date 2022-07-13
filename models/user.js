const { Schema, model } = mongoose

// make a user schema
const userSchema = new Schema({
    username: {
        type: String, //string come from the user name field
        required: true,
        unique: true
    },
    password: {
        type: String, //single User
        required: true
    }
})