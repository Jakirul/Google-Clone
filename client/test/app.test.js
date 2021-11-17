/**
 * @jest-environment jsdom
 */

const { TestWatcher } = require('@jest/core');
const fs = require('fs');
const path = require('path');
const { getRadnomResult } = require('../js/app.js');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

global.fetch = require('jest-fetch-mock');
let app;

describe('app', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        app = require('../js/app.js')
    })

    afterEach(() => {
        fetch.resetMocks();
    })

    describe('requests', () =>{
        describe('getSearchResult' ,() =>{
            test('it exists', () =>{
                expect(app.getSearchResult).toBeTruthy()
            }) 

            // test('gets stuff from /', () =>{
            //     app.getSearchResult();
            //     expect(fetch.mock.calls[0][1]).toMatch(/list$/)
            // })
        })

        describe('getRandomSearchResult', () =>{
            test('it exists', () =>{
                expect(app.getRadnomResult).toBeTruthy()
            })
        })
    })
})