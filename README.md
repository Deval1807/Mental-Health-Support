# WellNest - one stop solution to all your mental health problems

# How to run

## backend

create a `config.env` file, it will need three keys:
DATABASE = mongodb+srv://
PORT = 5000
KEY = BERYBERYSECRET

Then run:
`cd Server`
`npm i --legacy-peer-deps`
`npx nodemon index.js`

it will start running the backend on `http://localhost:5000`

## frontend

Run:
`cd client`
`npm i --legacy-peer-deps`
`npm start`

it should by default start the frontend on `http://localhost:3000`
