# LAP 1 Code Challenge
### By Menelaos Kaskiris and Jakirul Islam 

## Assignment Description
This is a pair assignment which asked us to develop our own version of Google. The contents of the website includes a homepage with a logo, search bar and two buttons. One button consists of a search button which shows 10 results and the second button opens a random link from the search result.

## Installation & Usage
- For first time installation, type `npm install` to install all required dependencies of the projects.
- To run the code, type `npm start`
- To run the tests, type `npm test`
- To see the coverage, type `npm run coverage`

## Search results available:
- cat / cats
- dog / dogs
- giraffe 
- penguin

## Technologies
- HTML/CSS
- JavaScript
- Node / Express.js
- Jest / Coverage
- Nodemon
- Cors

## Issues

We have come across a lot of issues with coverage. For example, when we seperated the front end javascript files for modularity, coverage thought we weren't actually running the functions when we are. This gave us a score of 45%! We put them all back into one big file and we achieved a coverage of 85%.

We figured using bundles would help but we couldn't figure out how to use all 3 files together.

## Images

#### The Home Page
![Home page](https://i.gyazo.com/07b68afcd250d4d40f950af882dd8c7f.png)

#### Search results
![Search result](https://i.gyazo.com/d046e9f25cdd9b83b14fc59b38bf967d.png)

#### Search result when no results are found
![No result found](https://i.gyazo.com/c8f0fb09e3de60803e42b091eaeed4b9.png)

## Files

## Client side
### apps.js
- Contains front end functions
- getSearchResult returns a list of results
- getRandomSearchResult redirects to a random page of the search results
-   appendResults , makeTitle, makeDescription and getRandomResults are helper functions

### index.js
- Event listeners

### style.js
- Changes the layout of the page upon searching

### index.html
- Basic html structure of website

### style.css
- Styling of website

## Server side
### random.js
- Router for fetching a random link

### data.js
- Database

### index.js
- Starts the server

### server.js
- Server functionality

## Testing
### app.test.js
- Tests front end functionality

### layout.test.js
- Tests layout of webpage

### api.spec.js
- Tests api functionality
