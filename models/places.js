const {Schema, model } = mongoose

const placesSchema = new Schema({
 name: String,
 address: String,
 free: Boolean

},{
    timestamps: true
})