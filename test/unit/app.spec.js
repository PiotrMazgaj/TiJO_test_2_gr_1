describe('app', function ()
{
    'use strict';

    var app = window.app;

    describe('reverseNumber', function () {
        it('should reverse the number', function () {
            expect(app.reverseNumber(1234)).toEqual(4321);
			expect(app.reverseNumber(2345)).toEqual(5432);
        });
        it('should reverse the number from "number string"', function () {
            expect(app.reverseNumber('3334433')).toBe(3344333);
			expect(app.reverseNumber('1221')).toBe(1221);
        });
        it('should not return a string', function () {
            expect(app.reverseNumber(1234)).not.toBe('4321');
			expect(app.reverseNumber(1245)).not.toBe('5421');
        });
        it('should not accept not number as an argument', function () {
			expect(app.reverseNumber([])).not.toEqual(false);
			expect(app.reverseNumber([1])).not.toEqual(false);
        });
        it('should return single number', function () {
            expect(app.reverseNumber(5)).toBe(5);
			expect(app.reverseNumber(7)).toBe(7);
        });
    });
});
