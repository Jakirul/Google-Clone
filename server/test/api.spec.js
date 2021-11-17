const request = require('supertest');
// import server
const server = require('../server');

const data = require('../data');

describe('API server', () => {
    let api;

    beforeAll(() => {
        // start the server and store it in the api variable
        api = server.listen(5000, () =>
            console.log('Test server running on port 5000')
        );
    });

    afterAll((done) => {
        // close the server, then run done
        console.log('Gracefully stopping test server');
        api.close(done);
    });

    it('responds to get / with status 200', (done) => {
        request(api).get('/').expect(200, done);
    });

    it('responds to get /random with status 200', () => {
        request(api)
            .get('/random')
            .expect(200)
            .expect('Content-Length', '1');
    });

    it('responds to get /cat to fetch 3 results', () => {
        request(api)
            .get('/cat')
            .expect(200)
            .expect([{
                search: 'Cats Are Cool',
                description: 'Wikipedia of cat',
                url: 'https://en.wikipedia.org/wiki/Cat'
              },
              {
                search: 'Cats funny videos',
                description: 'Videos all about cats and they are funny!',
                url: 'https://www.youtube.com/watch?v=pqbBvaBncJs'
              },
              {
                search: 'I love cats',
                description: 'lol joke',
                url: 'https://cats.com'
              }]);

    });   

    it('responds to get /fish with error code 404', (done) =>{
        request(api)
            .get('/fish')
            .expect((404), done);
    })

    for(let i=0; i<data.length;i++){
        it('expects search, description and url', () =>{
            expect(data[i]).toHaveProperty('search');
            expect(data[i]).toHaveProperty('description');
            expect(data[i]).toHaveProperty('url');
        })
    }
    
})

