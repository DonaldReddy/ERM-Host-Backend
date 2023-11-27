import User from '../../database/schemas/User.js'

async function signup(email = '', password = '') {
    try {
        await User.insertMany({ email: email, password: password });
        return { status: true }
    } catch (Error) {
        console.log(Error.message);
        const msg = Error.message
        var error = 'Unexpected error'
        if (msg.includes('duplicate'))
            error = 'Email already in use'
        return { status: false, error: error }
    }
}

export { signup }