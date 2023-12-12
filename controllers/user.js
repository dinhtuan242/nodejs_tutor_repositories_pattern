import { validationResult } from "express-validator";
import { userRepository } from "../repositories/index.js";
import { EventEmitter } from 'node:events'
import HttpStatusCode from "../exceptions/HttpStatusCode.js";

const myEvent = new EventEmitter()
//listen
myEvent.on('event.register.user', (params) => {
    console.log(`event is listening...${ JSON.stringify(params) }`)
})
const getAllUsers = (req, res) => {
    userRepository.getAllUsers()
        .then(() => {
            res.status(HttpStatusCode.OK).json({
                message: "get All Users",
                data: null,
            })
        })
}
const login = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(HttpStatusCode.VALIDATE_FAILED).json({ errors: errors.array() })
    }
    const { email, password } = req.body
    await userRepository.login({ email, password })
    res.status(HttpStatusCode.OK).json({
        message: "login success",
        data: null,
    })
}

const register = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(HttpStatusCode.VALIDATE_FAILED).json({ errors: errors.array() })
    }
    const { email, password, name, phoneNumber, address } = req.body
    await userRepository.register({ email, password, name, phoneNumber, address })
    myEvent.emit('event.register.user', req.body)
    res.status(HttpStatusCode.CREATED).json({
        message: "register success",
        data: null,
    })
}

const getDetailUser = async (req, res) => {
    await userRepository.detail(req?.params.id)
    res.status(HttpStatusCode.OK).json({
        message: "detail success",
        data: null,
    })
}

export default {
    login,
    register,
    getDetailUser,
    getAllUsers
}