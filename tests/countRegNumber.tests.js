describe('countRegNumber function', function () {
    it('return count many registrations numbers', function () {
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);
    });
    it('return count one registrations numbers', function () {
        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);
    });
});
