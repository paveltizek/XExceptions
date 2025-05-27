// src/ValidationError.js
import { BaseAppError } from './BaseAppError.js';

export const VALIDATION_ERROR_CODE = 'VALIDATION_FAILED';

export class ValidationError extends BaseAppError {
    constructor(message = 'Došlo k chybě validace.', details = null) {
        super(message, VALIDATION_ERROR_CODE, 400, details); // 400 Bad Request
    }
}