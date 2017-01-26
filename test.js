const app = require('./index');

test('The initial position of the rover should be x = 50 and y = 100', function() {
	const instance = app();
	expect(instance.x).toBe(0);
	expect(instance.y).toBe(0);
	expect(instance.direction).toBe('E');
});

test('The rover moves forward one time', function() {
	const instance = app();
	instance.forward();
	expect(instance.x).toBe(1);
	expect(instance.y).toBe(0);
	expect(instance.direction).toBe('E');
});

test('The rover moves forward two times', function() {
	const instance = app();
	instance.forward();
	instance.forward();
	expect(instance.x).toBe(2);
	expect(instance.y).toBe(0);
	expect(instance.direction).toBe('E');
})

test('The rover turns right one time', function() {
	const instance = app();
	instance.right();
	expect(instance.x).toBe(0);
	expect(instance.y).toBe(0);
	expect(instance.direction).toBe('S');
});

test('The rover turns right two times', function() {
	const instance = app();
	instance.right();
	instance.right();
	expect(instance.x).toBe(0);
	expect(instance.y).toBe(0);
	expect(instance.direction).toBe('W');
});

test('The rover moves forward one time, turns right and moves forward two times', function() {
	const instance = app();
	instance.forward();
	instance.right();
	instance.forward();
	instance.forward();
	expect(instance.x).toBe(1);
	expect(instance.y).toBe(-2);
	expect(instance.direction).toBe('S');
});

test('The rover moves backward one time', function() {
	const instance = app();
	instance.backward();
	expect(instance.x).toBe(-1);
	expect(instance.y).toBe(0);
	expect(instance.direction).toBe('E');
});

test('The rover does many things', function() {
	const instance = app();
	instance.right();
	expect(instance.direction).toBe('S');
	instance.forward();
	instance.backward();
	instance.right();
	instance.forward();
	instance.backward();
	instance.right();
	instance.forward();
	instance.backward();
	instance.right();
	instance.forward();
	instance.backward();
	expect(instance.x).toBe(0);
	expect(instance.y).toBe(0);
	expect(instance.direction).toBe('E');
})