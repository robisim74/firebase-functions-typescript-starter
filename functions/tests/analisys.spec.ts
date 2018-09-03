/* tslint:disable */
// Test framework.
import 'mocha';
// Assertion library.
import { use, expect } from 'chai';
// Standalone test spies, stubs and mocks.
import * as sinon from 'sinon';
// Extends Chai with assertions for the Sinon.JS 
import * as sinonChai from 'sinon-chai';

import { analysisFunction } from '../src/analysis.function';

use(sinonChai);

describe('Analysis', () => {

    it('should make the analysis', () => {
        const req = {
            body: {
                values: [1.62, 2.57, 3.75, 4.41, 5.13, 5.32, 5.49, 4.82, 3.72, 2.45, 1.63, 1.32, 3.52]
            }
        };
        const res = {
            send: (s) => { },
            status: (s) => { this.statusCode = s; return this; }
        };

        // sinon.spy(object, "method") creates a spy that wraps the existing function.
        const spy = sinon.spy(res, "send");

        analysisFunction(req, res);

        expect(res.send).to.have.been.calledWith(sinon.match(JSON.stringify({ average: 3.52 })));
    });

});
