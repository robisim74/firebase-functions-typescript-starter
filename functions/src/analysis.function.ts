import { calcAverage } from './models/average';

/**
 * Analysis function.
 */
export function analysisFunction(request, response): void {

    const data: { values: number[] } = request.body;

    let result: any;

    try {
        const average: number = calcAverage(
            data.values
        );

        result = JSON.stringify({ average });

    } catch (error) {
        result = error;
    }

    response.send(result);

}
