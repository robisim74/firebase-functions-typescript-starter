import { sum } from "./sum.js";

export function calcAverage(values: number[]): number {
    return Math.round(values.reduce(sum) / values.length * 100) / 100;
}
