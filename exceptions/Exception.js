import {OutputType, print} from "../helpers/print.js";

export default class Exception extends Error {
    constructor(message) {
        super(message);
        print(message, OutputType.ERROR)
    }
}