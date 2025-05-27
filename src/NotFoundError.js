// src/NotFoundError.js
import { BaseAppError } from './BaseAppError.js';

export const NOT_FOUND_ERROR_CODE = 'RESOURCE_NOT_FOUND';

export class NotFoundError extends BaseAppError {
    constructor(resourceName = 'Zdroj', details = null) {
        super(`Píčovinu ${resourceName} jsem nenašel, jebu na to.`, NOT_FOUND_ERROR_CODE, 404, details); // 404 Not Found
    }
}