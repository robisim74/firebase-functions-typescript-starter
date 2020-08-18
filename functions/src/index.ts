import * as functions from 'firebase-functions';
import * as _cors from 'cors';

import { analysisFunction } from './analysis.function';
import { functionsConfig } from './functions-config';

// CORS configuration.
const options: _cors.CorsOptions = {
    origin: functionsConfig.whitelist
};
const cors = _cors;

/**
 * Trigger a function with an HTTP request.
 */
export const httpFunction = functions.https.onRequest((request: functions.Request, response: functions.Response) => {
    cors(options)(request, response, () => analysisFunction(request, response));
});

// Add here other functions.
