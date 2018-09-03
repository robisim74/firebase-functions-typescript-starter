import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as _cors from 'cors';

import { analysisFunction } from './analysis.function';
import { deleteUserDataFunction } from './delete-user-data.function';
import { functionsConfig } from './functions-config';

// CORS configuration.
const options: _cors.CorsOptions = {
    origin: functionsConfig.whitelist
};
const cors = _cors;

// Initializes Cloud Functions.
admin.initializeApp(functions.config().firebase);

/**
 * Trigger a function with an HTTP request.
 */
export const httpFunction = functions.https.onRequest((request: functions.Request, response: functions.Response) => {
    cors(options)(request, response, () => analysisFunction(request, response));
});

/**
 * Trigger a function on user deletion.
 */
export const authFunction = functions.auth.user().onDelete((user: admin.auth.UserRecord) => {
    return deleteUserDataFunction(user);
});

// Add here other functions.
