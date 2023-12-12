const getAllStudent = async () => {
    console.log('get All Student repository student')
}
const detail = async (id) => {
    console.log('detail repository student')
}
const insert = async ({name, email, languages, gender, phoneNumber, address}) => {
    console.log('insert repository student')
}
const update = async ({name, email, languages, gender, phoneNumber, address}) => {
    console.log('update repository student')
}

export default {
    getAllStudent,
    detail,
    insert,
    update
}
