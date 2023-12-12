import mongoose from "mongoose"
import {OutputType, print} from "../helpers/print.js";
import Exception from "../exceptions/Exception.js";

const connect = async () => {
    try {
        console.log(process.env.MONGO_URI)
        let connection = await mongoose.connect(process.env.MONGO_URI)
        print('connect mongoose db successfully', OutputType.SUCCESS)
        return connection
    } catch (error) {
        if (parseInt(error.code) === 8000) {
            throw new Exception('wrong username and password')
        }
        throw new Exception('cannot connect to mongoose db')
    }
}

export default connect
