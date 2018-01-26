import { sum } from "./sum";

/**
 * Just an example of a singleton class
 * if you need to share an instance with initialization in the whole function.
 */
export class Average {

    private static instance: Average;

    public get value(): number {
        return this._value;
    }

    private _value: number;

    public static getInstance(): Average {
        if (!Average.instance) {
            Average.instance = new Average();
        }
        return Average.instance;
    }

    public static deleteInstance(): void {
        delete Average.instance;
    }

    /**
     * Initializes the instance.
     * @param values
     */
    public calculate(values: number[]): void {
        this._value = Math.round(values.reduce(sum) / values.length * 100) / 100;
    }

}
