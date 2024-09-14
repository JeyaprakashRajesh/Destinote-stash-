const jwt = require("jsonwebtoken")
const decode = require("jwt-decode")

const KEY = "77b02b54a1f5abf66d2a890971a82e66winef3e4b92e778ab5f6ae380d530afa"
export function createToken(email) {
    return jwt.sign({email : email} , KEY)
}
export function verifyToken(header) {
    const token = header.split("")[1]
    const email = jwt.decode(token).email
    const verify = jwt.verify(token,KEY)
    return ({
        verify: verify,
        email : email
    })
}