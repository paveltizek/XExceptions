// src/BaseError.ts

export class BaseError extends Error {
    public readonly code: string;
    public readonly httpStatusCode: number;
    public readonly details: unknown; // 'unknown' je bezpečnější než 'any'

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

        // Zachování správného stack trace (hlavně pro V8 - Chrome, Node.js)
        // V TypeScriptu se toto často řeší v tsconfig.json (target ES6+ to obvykle zvládne)
        // nebo se nechává takto pro explicitní kontrolu.
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}