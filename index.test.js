const sum = require('./index');

test('it adds two numbers correctly', () => {
    expect(sum(2, 2)).toBe(4);
});

test('it adds two negative numbers correctly', () => {
    expect(sum(-2, -2)).toBe(-4);
});

test('it adds three numbers correctly', () => {
    expect(sum(1, 1, 4)).toBe(6);
});

// TDD
// Test Driven Development