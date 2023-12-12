import { OutputType, print } from "../helpers/print.js";

export default class Exception extends Error {
    static WRONG_DATABASE_USERNAME_PASSWORD = 'Wrong username and password'
    static CANNOT_CONNECT_TO_MONGOOSE_DB = 'Cannot connect to mongoose db'
    static WRONG_CONNECTION_STRING = 'Wrong connection string'

    constructor(message) {
        super(message);
        print(message, OutputType.ERROR)
    }
}