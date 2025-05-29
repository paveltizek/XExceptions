// src/index.ts

// Export základních tříd
import {DATABASE_FAILED, ITEM_NOT_FOUND, PERMISSION_DENIED} from "./errorConstants";

export {BaseError} from './BaseError';

// Export obecných kódů chyb
export * from './errorConstants';

// Objekt s mapováním typů chyb na jejich defaultní kódy
// Užitečné pro snadnější přístup a kontrolu v kódu, který chyby zpracovává
export const ERROR_CODES = {
    DATABASE_FAILED: 'XE-404', // Příklad, pokud byste chtěli i tyto zde
    PERMISSION_DENIED: 'XE-400',
    ITEM_NOT_FOUND: 'XA-404',
} as const; // 'as const' zajistí, že typy budou konkrétní stringy, ne jen 'string'

// Můžete také vytvořit typ pro kódy chyb pro lepší typovou bezpečnost
export type KnownErrorCode =
    | typeof DATABASE_FAILED // atd. z errorConstants
    | typeof PERMISSION_DENIED
    | typeof ITEM_NOT_FOUND;

// Použití KnownErrorCode (příklad, není nutné pro funkčnost):
// function handleKnownError(code: KnownErrorCode) { /* ... */ }