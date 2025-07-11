// src/errorConstants.ts

export const DATABASE_FAILED: string = 'XE-404';
export const PERMISSION_DENIED: string = 'XE-400';
export const ITEM_NOT_FOUND: string = 'XA-404'; // Tento může být použit např. s NotFoundError
export const UNAUTHORIZED_ACCESS: string = 'XE-401';
export const FORBIDDEN_RESOURCE: string = 'XE-403';
export const INTERNAL_SERVER_ERROR: string = 'XE-500';
export const SERVICE_UNAVAILABLE: string = 'XE-503';
export const BAD_REQUEST: string = 'XE-400'; // Obecný kód pro špatný požadavek
export const CONFLICT_ERROR: string = 'XE-409'; // Např. pro konfliktní data
export const TIMEOUT_ERROR: string = 'XE-408'; // Pro časově omezené požadavky
export const RATE_LIMIT_EXCEEDED: string = 'XE-429'; // Pro překročení limitu požadavků
export const NOT_IMPLEMENTED: string = 'XE-501'; // Pro funkce, které nejsou implementovány
export const GATEWAY_TIMEOUT: string = 'XE-504'; // Pro časový limit u proxy serverů
export const UNPROCESSABLE_ENTITY: string = 'XE-422'; // Pro chyby při zpracování entity
export const PRECONDITION_FAILED: string = 'XE-412'; // Pro selhání předpokladu požadavku
export const TOO_MANY_REQUESTS: string = 'XE-429'; // Pro příliš mnoho požadavků v krátkém čase
export const NOT_ACCEPTABLE: string = 'XE-406'; // Pro požadavek, který není akceptovatelný
export const UNSUPPORTED_MEDIA_TYPE: string = 'XE-415'; // Pro nepodporovaný typ média v požadavku
export const METHOD_NOT_ALLOWED: string = 'XE-405'; // Pro nepodporovanou HTTP metodu
export const UNAUTHORIZED: string = 'XE-401'; // Pro neautorizovaný přístup
export const BAD_GATEWAY: string = 'XE-502'; // Pro chyby na úrovni proxy serveru
export const NOT_IMPLEMENTED_ERROR: string = 'XE-501'; // Pro funkce, které nejsou implementovány
export const SERVICE_ERROR: string = 'XE-500'; // Obecný kód pro interní chybu serveru
export const DATABASE_CONNECTION_ERROR: string = 'XE-500'; // Pro chyby spojené s databází
export const DATA_VALIDATION_ERROR: string = 'XE-422'; // Pro chyby při validaci dat
export const RESOURCE_LOCKED: string = 'XE-423'; // Pro zámek zdroje, který brání operaci
export const INSUFFICIENT_STORAGE: string = 'XE-507'; // Pro nedostatek úložiště
export const NETWORK_ERROR: string = 'XE-599'; // Pro obecné síťové chyby
export const UNKNOWN_ERROR: string = 'XE-520'; // Pro neznámé chyby, které nelze klasifikovat
export const INVALID_INPUT: string = 'XE-400'; // Pro neplatný vstup od uživatele
export const AUTHENTICATION_ERROR: string = 'XE-401'; // Pro chyby spojené s autentizací
export const AUTHORIZATION_ERROR: string = 'XE-403'; // Pro chyby spojené s autorizací
export const RESOURCE_NOT_FOUND: string = 'XE-404'; // Pro zdroj, který nebyl nalezen
export const OPERATION_NOT_SUPPORTED: string = 'XE-501'; // Pro operace, které nejsou podporovány
export const DATA_CONFLICT: string = 'XE-409'; // Pro konfliktní data, např. při aktualizaci
export const REQUEST_TIMEOUT: string = 'XE-408'; // Pro požadavek, který překročil časový limit
export const UNEXPECTED_ERROR: string = 'XE-500'; // Pro neočekávané chyby, které nelze klasifikovat
export const INVALID_CREDENTIALS: string = 'XE-401'; // Pro neplatné přihlašovací údaje
export const SESSION_EXPIRED: string = 'XE-401'; // Pro vypršení platnosti relace
export const FEATURE_NOT_AVAILABLE: string = 'XE-503'; // Pro funkce, které nejsou dostupné
export const API_RATE_LIMIT_EXCEEDED: string = 'XE-429';
export const INVALID_API_KEY: string = 'XE-401'; // Pro neplatný API klíč
export const INSUFFICIENT_PERMISSIONS: string = 'XE-403'; // Pro nedostatečná oprávnění
export const INVALID_REQUEST_FORMAT: string = 'XE-400'; // Pro neplatný formát požadavku
export const UNSUPPORTED_OPERATION: string = 'XE-501'; // Pro operace, které nejsou podporovány
export const DATA_INTEGRITY_VIOLATION: string = 'XE-409'; // Pro porušení integrity dat
export const SERVICE_TIMEOUT: string = 'XE-504'; // Pro časový limit služby
export const DATABASE_QUERY_ERROR: string = 'XE-500'; // Pro chyby při dotazování databáze
export const INVALID_RESPONSE: string = 'XE-502'; // Pro neplatnou odpověď od služby
export const CONFIGURATION_ERROR: string = 'XE-500'; // Pro chyby v konfiguraci systému
export const DEPENDENCY_ERROR: string = 'XE-503'; // Pro chyby závislostí, např. externích služeb
export const UNEXPECTED_RESPONSE: string = 'XE-500'; // Pro neočekávanou odpověď od služby
export const RESOURCE_ALREADY_EXISTS: string = 'XE-409'; // Pro zdroj, který již existuje
