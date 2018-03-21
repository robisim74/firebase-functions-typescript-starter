import { sum } from "./sum";

export function calcAverage(values: number[]): number {
    return Math.round(values.reduce(sum) / values.length * 100) / 100;
}
