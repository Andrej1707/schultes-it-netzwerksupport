// The browser leaves room for the worker to finish its bounded processing and
// return a useful error, instead of cancelling a still-valid response first.
export const SUPPORT_CHAT_PROCESSING_TIMEOUT_MS = 60_000
export const SUPPORT_CHAT_REQUEST_TIMEOUT_MS = SUPPORT_CHAT_PROCESSING_TIMEOUT_MS + 10_000
export const SUPPORT_SESSION_REQUEST_TIMEOUT_MS = 20_000
export const SUPPORT_SLOW_RESPONSE_NOTICE_MS = 12_000

export const SUPPORT_MODERATION_TIMEOUT_MS = 15_000
export const SUPPORT_MODEL_TIMEOUT_MS = 30_000
