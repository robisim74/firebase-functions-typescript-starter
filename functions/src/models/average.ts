import { sum } from "./sum";

/**
 * Just an example of a singleton class
 * if you need to share an instance with lazy initialization in the whole function.
 */
export class Average {

    public get value(): number {
        return Average._value;
    }

    private static _value: number;

    private static instance: Average;

    /**
     * Lazy initialization.
     */
    public static getInstance(values: number[]): Average {
        if (!Average.instance) {
            Average.instance = new Average();

            Average.calculate(values);
        }
        return Average.instance;
    }

    private static calculate(values: number[]): void {
        Average._value = Math.round(values.reduce(sum) / values.length * 100) / 100;
    }

}
