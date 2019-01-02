//NOTE: testing tutorial is from http://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/

const request = require('supertest');
const app = require('./app')

// 3. Use done to notify that it ends
// Jest test will end when it hits the last line of the test function, so you need to use a done() to make it right.
describe('Test the root path', () => {
    test('It should return correct response (using done())', (done) => {
        request(app).get('/').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});


// 4. Promise way
// Two Things to be noticed here:
// That return is crucial, otherwise your tests will get stuck.
// No need to pass done to your test.
describe('Test the root path', () => {
    test('It should return correct response (not using done())', () => {
        return request(app).get("/").then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
})


// 5. Async, await way to test
// It’s good to see that my beloved async and await from .net has a place in javascript world too.
describe('Test the root path', () => {
    test('It should return correct response (Async, await way)', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
})
// Does the imperative programming style and synchronous looking make you feel happy? :D Two things also be noticed here.
// Use async to the function before you want to use await
// You need the babel-preset-env package to use this.
// You don’t need to use babel-preset-env if you use Node8 or above because it’s supported.


// 6. Why not the Supertest way
// Supertest way is still available. You just need to return the statement and remember not use .end() and the end.
// Thanks Adam Beres-Deak for the hint!
// A working example is as the following:
describe('Test the root path', () => {
    test('It should return correct response (Supertest way)', () => {
        return request(app).get('/').expect(200);
    });
})
// Notice that without that return, the test will always pass.