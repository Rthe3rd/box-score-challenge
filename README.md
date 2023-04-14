# box-score-challenge
Box Score Challenge covers the requirements 
- Consumes provided api's and saves responses to db (MongoDB)
- Each hit of the page triggers a query to the db for the freshest data
  - If the data does not exist; i.e. the very first visit to the page, a get request to the proper API (mlb or nba data) is made, the response is posted to the DB and then served to the DOM
  - If the freshest data is less than or equal to 15s old, the data in the DB is served to the DOM
  - If the freshest data is older than 15s, a get request to the proper API (mlb or nba data) is made, the response is posted to the DB and then served to the DOM

# Client
npm run dev

# Server
nodemon server.js
