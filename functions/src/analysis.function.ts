import { Average } from './models/average';

/**
 * Analysis function.
 */
export function analysisFunction(request, response): void {

    const data: { values: number[] } = request.body;

    let result: any;

    try {
        const average = Average.getInstance(
            data.values
        );

        result = JSON.stringify({ average: average.value });

    } catch (error) {
        result = error;
    }

    response.send(result);

}
