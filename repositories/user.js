import { OutputType, print } from "../helpers/print.js"
import { User } from '../models/index.js'
import Exception from "../exceptions/Exception.js"
import bcrypt from 'bcrypt'

const login = async ({ email, password }) => {
    print('login repository user')
}
const register = async (
    {
        email,
        password,
        name,
        phoneNumber,
        address
    }
) => {
    const existingUser = await User.findOne({ email }).exec()
    if (!!existingUser) {
        throw new Exception(Exception.USER_ALREADY_EXIST)
    }
    const hashPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS))
    const newUser = new User({ name, email, password: hashPassword, phoneNumber, address })
    newUser.save().then(() => {
        print('insert user success', OutputType.SUCCESS)
    })
    return newUser
}
const getAllUsers = async () => {
    console.log('getAllUsers repository user')
}
const detail = async (id) => {
    console.log('detail repository user')
}

export default {
    login,
    register,
    getAllUsers,
    detail
}
