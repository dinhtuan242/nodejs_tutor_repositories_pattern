const login = async ({ email, password }) => {
    console.log('login repository user')
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
    console.log('register repository user')
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
