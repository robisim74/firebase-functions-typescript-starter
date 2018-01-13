import * as functions from 'firebase-functions';
import * as _cors from 'cors';

import { analysisFunction } from './analysis.function';

// CORS configuration.
const whitelist: string[] = [
    'http://localhost:4200'
];
const options: _cors.CorsOptions = {
    origin: whitelist
};
const cors = _cors; // Workaround for Rollup.

/**
 * Analysis function.
 */
export const analysis = functions.https.onRequest((request, response) => {
    cors(options)(request, response, () => analysisFunction(request, response));
});

// Add here other functions.
