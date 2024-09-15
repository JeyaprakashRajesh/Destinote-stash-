import mongoose from "mongoose"

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
        type: String,

    },
    password: {
        type: String,
    },
    home: {
        type: [String]
    },
    work: {
        type : [String]
    },
    favorites: {
        type: [{
            name : String,
            coordinates : [String]
        }]
    }
})
const users = mongoose.model("users", userSkeleton)

export async function validateUser(email, password) {
    try {
        const user = await users.findOne({ email: email })
        if (user && user.email == email && user.password == password) {
            return { status: true, email: email }
        } else {
            return { status: false, email: email }
        }
    } catch (err) {
        console.log("error validating user : ", err)
        return { status: false, email: email }
    }

}

export async function isExistingUser(email) {
    try {
        const user = await users.findOne({ email: email })
        if (user) {
            return true
        } else {
            return false
        }
    } catch (err) {
        console.log("error checking user : ", err)
        return false
    }

}

export async function createUser(userName, email, password) {
    try {
        const newUser = new users({
            userName: userName,
            email: email,
            password: password
        })
        await newUser.save()
        return (true)
    } catch (err) {
        console.log("error creating user : ", err)
        return false
    }

}

export async function getDetails(email) {
    try {
        const user = await users.findOne({ email: email });
        if (user) {
            return { status: true, user: user };
        } else {
            return { status: false, user: null };
        }
    } catch (err) {
        console.log("Error fetching data: ", err);
        return { status: false, user: null };
    }
}
