import jwt from "jsonwebtoken"

const KEY = "77b02b54a1f5abf66d2a890971a82e66winef3e4b92e778ab5f6ae380d530afa"
export function createToken(email) {
    return jwt.sign({ email: email }, KEY)
}

export function verifyToken(token) {
    try {
        const decoded = jwt.verify(token, KEY)
        return ({status : true , email : decoded.email })
    } catch (err) {
        return {status : true , email : null }
    }
}