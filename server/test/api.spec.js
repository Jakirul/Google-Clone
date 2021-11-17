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

    it('responds to post with status 404', () =>{
        request(api).post('/').expect(404).expect('Not allowed');
    })

    it('responds to get /random with status 200', () => {
        request(api)
            .get('/random')
            .expect(200)
            .expect('Content-Length', '1');
    });

    it('responds to get /cat to fetch 10 results', () => {
        request(api)
            .get('/cat')
            .expect(200)
            .expect([  {
                search: 'Cats - Wikipedia',
                description: 'Wikipedia of cat',
                url: 'https://en.wikipedia.org/wiki/Cat'
              },
              {
                search: 'Cats funny videos',
                description: 'Videos all about cats and they are funny!',
                url: 'https://www.youtube.com/watch?v=pqbBvaBncJs'
              },
              {
                search: 'Funny Cats and Kittens Meowing Compilation',
                description: 'Here is a video if cats and kittens meowing to confuse your pets',
                url: 'https://www.youtube.com/watch?v=DXUAyRRkI6k'
              },
              {
                search: 'Cats Protection',
                description: 'We are \UK\'s leading cat charity. As a feline welfare charity, we help 200000 cats and kittens every year.',
                url: 'https://www.cats.org.uk/'
              },
              {
                search: 'Cats',
                description: 'IMDB Link of Cats the movie',
                url: 'https://www.imdb.com/title/tt5697572/'
              },
              {
                search: 'CATS International',
                description: 'Cats education',
                url: 'https://www.catseducation.com/'
              },
              {
                search: 'Cats the Musical',
                description: 'Andrew Lloyd Webbers record-breaking, award-winning, family favourite West End and Broadway musical CATS - book your tickets today!',
                url: 'https://www.catsthemusical.com/'
              },
              {
                search: 'RSPCA - Cats Care Tips',
                description: 'Caring for cats and kittens',
                url: 'https://www.rspca.org.uk/adviceandwelfare/pets/cats'
              },
              {
                search: 'Why do we think cats are unfriendly?',
                description: 'Cats are the only asocial animal we have successfully domesticated. We’re disappointed that we don’t bond with them as easily as dogs. But are we just missing the signs?',
                url: 'https://www.bbc.com/future/article/20191024-why-do-we-think-cats-are-unfriendly'
              },
              {
                search: 'Cats - CDC',
                description: 'Information from the CDC (Centers for Disease Control and Prevention) about Cats',
                url: 'https://www.cdc.gov/healthypets/pets/cats.html'
              },
              
            
              {
                search: 'Funny dog video',
                description: 'Videos all about dogs and they are funny!',
                url: 'https://www.youtube.com/watch?v=W-J-LSWQL-o'
              }, 
              {
                search: 'Dog wikipedia',
                description: 'Videos all about dogs and they are funny!',
                url: 'https://en.wikipedia.org/wiki/Dog'
              },
              {
                search: 'Funny dog video',
                description: 'Videos all about dogs and they are funny!',
                url: 'https://www.youtube.com/watch?v=W-J-LSWQL-o'
              }, 
              {
                search: 'Dogs trust: Dog Rescue',
                description: 'Adpot a dog today',
                url: 'https://www.dogstrust.org.uk/'
              }, 
              {
                search: 'RSPCA - Dog Care Advice',
                description: 'How to look after and care for a dog',
                url: 'https://www.rspca.org.uk/adviceandwelfare/pets/dogs'
              },
              {
                search: 'Battersea Dogs & Cats Home',
                description: 'Battersea Is Here For Every Dog And Cat, And Has Been Since 1860. We Believe That Every Dog And Cat Deserves The Best.',
                url: 'https://www.battersea.org.uk/'
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

