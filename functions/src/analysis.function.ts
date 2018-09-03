import { calcAverage } from './models/average';

/**
 * Analysis function.
 */
export function analysisFunction(request: any, response: any): void {
    const data: { values: number[] } = request.body;

    try {
        const average: number = calcAverage(
            data.values
        );

        // Result.
        const result = JSON.stringify({ average });
        response.status(200);
        response.send(result);

    } catch (error) {
        console.log('Analysis error:', error);
        response.status(500);
        response.send(error);
    }
}
