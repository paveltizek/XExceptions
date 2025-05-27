// src/BaseAppError.js
export class BaseAppError extends Error {
    constructor(message, code, httpStatusCode = 500, details = null) {
        super(message); // Volá konstruktor rodičovské třídy Error
        this.name = this.constructor.name; // Nastaví jméno chyby podle jména třídy
        this.code = code; // Váš vlastní kód chyby (např. 'VALIDATION_FAILED')
        this.httpStatusCode = httpStatusCode; // Pro API odpovědi
        this.details = details; // Jakékoliv další detaily

        // Zachování správného stack trace (hlavně pro V8 - Chrome, Node.js)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}