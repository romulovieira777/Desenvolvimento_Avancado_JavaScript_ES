const assert = require('assert');
const math = require('../src/math.js');
const expect = require('chai').expect;

let value = 0;

describe('Math class', function () {
    //hooks
    beforeEach(function() {
        value = 0;
    })

    it ('Sum two numbers', function (done) {
        const math = new Math();
        this.timeout(3000);

        value = 5;

        math.sum(value, 5, value => {
            expect(value).to.equal(10);
            done();
        });
    });

    it('Multiply two numbers', function() {
        const math = new Math();

        expect(math.multiply(value, 5)).to.equal(0);
    });
});