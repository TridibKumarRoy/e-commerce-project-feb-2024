class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode;

        Error.captureStackTrace(this,this.stack)
    }
}

module.exports = ErrorHandler;