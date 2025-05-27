import { BaseAppError } from './BaseAppError.js';
import { ValidationError, VALIDATION_ERROR_CODE } from './ValidationError.js';
import { NotFoundError, NOT_FOUND_ERROR_CODE } from './NotFoundError.js';
// import { AuthenticationError, AUTHENTICATION_ERROR_CODE } from './AuthenticationError.js';

// Exportujeme kódy chyb pro snadnější použití a kontrolu
export const ERROR_CODES = {
    VALIDATION: VALIDATION_ERROR_CODE,
    NOT_FOUND: NOT_FOUND_ERROR_CODE,
    // AUTHENTICATION: AUTHENTICATION_ERROR_CODE,
    // ...přidejte další kódy podle potřeby
};

// Exportujeme samotné třídy výjimek
export {
    BaseAppError,
    ValidationError,
    NotFoundError,
    // AuthenticationError,
};