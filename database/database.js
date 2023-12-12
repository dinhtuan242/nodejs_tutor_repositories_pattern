import mongoose from "mongoose"
import { OutputType, print } from "../helpers/print.js";
import Exception from "../exceptions/Exception.js";

const connect = async () => {
    try {
        console.log(process.env.MONGO_URI)
        let connection = await mongoose.connect(process.env.MONGO_URI)
        print('Connect mongoose db successfully', OutputType.SUCCESS)
        return connection
    } catch (error) {
        const { code } = error
        if (parseInt(code) === 8000) {
            throw new Exception(Exception.WRONG_DATABASE_USERNAME_PASSWORD)
        } else if (code === 'ENOTFOUND') {
            throw new Exception(Exception.WRONG_CONNECTION_STRING)
        }
        throw new Exception(Exception.CANNOT_CONNECT_TO_MONGOOSE_DB)
    }
}

export default connect
