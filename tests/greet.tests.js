
describe('greet function', function () {
    it('greet Bob correctly', function () {
        assert.equal(greet('Bob'), 'Hello, Bob');
    });
    it('greet Sam correctly', function () {
        assert.equal(greet('Sam'), 'Hello, Sam');
    });
});
