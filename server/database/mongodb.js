const { default: mongoose } = require("mongoose")
const mongo = require("mongoose")

try {
    mongoose.connect("mongodb://localhost:27017/DESTINOTE")
    console.log("mongo db connected sucessfully")
} catch (err) {
    console.log("error connecting to mongo db")
}

const userSkeleton = mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
    },
    login: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    phone: {
        type: Number,
        
    },
    password: {
        type: String,
    }   ,
    home: {
        type:[String]
    }
})
const users = mongoose.model("users", userSkeleton)

