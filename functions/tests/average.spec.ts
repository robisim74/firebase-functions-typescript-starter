import 'mocha';
import { expect } from 'chai';

import { calcAverage } from '../src/models/average';

describe('Average', () => {

    it('should calcolate average', () => {
        const average = calcAverage(
            [1.62, 2.57, 3.75, 4.41, 5.13, 5.32, 5.49, 4.82, 3.72, 2.45, 1.63, 1.32, 3.52]
        );

        expect(average).to.equal(3.52);
    });

});
