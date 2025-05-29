// src/BaseError.ts

export class BaseError extends Error {
    public readonly code: string;
    public readonly httpStatusCode: number;
    public readonly details: unknown;

    constructor(
        message: string,
        code: string,
        httpStatusCode: number = 500,
        details: unknown = null
    ) {
        super(message);
        this.name = this.constructor.name;
        this.code = code;
        this.httpStatusCode = httpStatusCode;
        this.details = details;

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}