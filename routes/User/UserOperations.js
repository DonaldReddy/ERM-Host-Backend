import User from '../../database/schemas/User.js'
import bcrypt from 'bcrypt'


async function signup(email = '', password = '') {
    try {
        const saltRounds = 10
        const hash = bcrypt.hashSync(password, saltRounds)
        await User.insertMany({ email: email, password: hash });
        return { status: true }
    } catch (Error) {
        const msg = Error.message
        var error = 'Unexpected error'
        if (msg.includes('duplicate'))
            error = 'Email already in use'
        return { status: false, error: error }
    }
}

async function login(email = '', password = '') {
    try {
        const user = await User.findOne({ email: email });
        if (user) {
            if (bcrypt.compareSync(password, user.password))
                return { status: true }
            return { status: false, error: 'wrong password' }
        }
        return { status: false, error: "User doesn't exist" }
    } catch (error) {
        return { status: false, error: error.message }
    }
}

export { signup, login }