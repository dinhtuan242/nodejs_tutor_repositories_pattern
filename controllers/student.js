import {studentRepository} from "../repositories/index.js";

const getAllStudents = async (req, res) => {
    await studentRepository.getAllStudent().then(() => {
        res.status(200).json({
            message: 'Get all student successfully',
            data: [
                {
                    name: "tuanvd",
                    age: "26",
                    email: "tuanvd@fabbi.com.vn"
                },
                {
                    name: "tuanvd2",
                    age: "26",
                    email: "tuanvd2@fabbi.com.vn"
                },
                {
                    name: "tuanvd3",
                    age: "26",
                    email: "tuanvd3@fabbi.com.vn"
                },
            ]
        })
    })
}

const getStudentById = async (req, res) => {
    await studentRepository.detail(req?.params.id)
    res.status(200).json({
        message: 'Get all student successfully',
        data: {
            name: "tuanvd",
            age: "26",
            email: "tuanvd@fabbi.com.vn"
        }
    })
}

const updateStudent = async (req, res) => {
    const {name, email, languages, gender, phoneNumber, address} = req?.body
    await studentRepository.update({name, email, languages, gender, phoneNumber, address})
    res.status(200).json({
        message: 'update student successfully',
    })
}

const insertStudent = async (req, res) => {
    const {name, email, languages, gender, phoneNumber, address} = req?.body
    await studentRepository.insert({name, email, languages, gender, phoneNumber, address})
    res.status(200).json({
        message: 'insert student successfully',
    })
}

export default {
    getAllStudents,
    getStudentById,
    updateStudent,
    insertStudent
}