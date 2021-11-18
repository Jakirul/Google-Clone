/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

describe('index.html', () => {
    
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })

    describe('head', () => {
        test('it has a title', () => {
            const title = document.querySelector('head title');
            expect(title).toBeTruthy();
            expect(title.textContent).toBe("LAP 1 Code Challenge")
        })
    })

        describe('body', ()=>{
            describe('search bar', () =>{
                let search;

                beforeEach(() =>{
                    search = document.querySelector('#search')
                })

                test('it exists', () =>{
                    expect(search).toBeTruthy();
                })
            })

            describe('search button', () =>{
                let button;

                beforeEach(() => {
                    button = document.querySelector('.all');
                })

                test('it exists', () =>{
                    expect(button).toBeTruthy();
                })
            })

            describe('lucky button', () =>{
                let button;

                beforeEach(() => {
                    button = document.querySelector('.one');
                })

                test('it exists', () =>{
                    expect(button).toBeTruthy();
                })
            })

            describe('logo', () =>{
                let logo;

                beforeEach(() => {
                    logo = document.querySelector('img');
                })

                test('it exists', () =>{
                    expect(logo).toBeTruthy();
                })

            })
        })
})