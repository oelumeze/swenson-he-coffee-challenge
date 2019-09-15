# swenson-he-coffee-challenge
Swenson HE BackEnd Challenge

# Installation Instructions

To get this backEnd up and running, do the following:

- run `npm install`
- create a file `.env` on the root directly, containing the list below
    - HTTP_PORT={PORT_YOU_WANT_TO_USE}
    - MONGODB_PORT={MONGODB_PORT_YOU_WANT_TO_USE}
    - MONGODB_URL={MONGODB_URL_YOU_WANT_TO_USE}
    - MONGODB_DATABASE={DATABASE_NAME_YOU_WANT_TO_USE}
    - COFFEE_MACHINE_SCRIPT_LOADED=false
    - COFFEE_PODS_SCRIPT_LOADED=false
- After you have provided the environment variable details, run this command,
    - `npm run dev`
    - when the server starts up, it will create the`coffeeMachines` and `cofffeePods` collections.
    - confirm they were created, by checking your database.
    - if collections were created, stop the server with `ctrl+c`, and change the following environment variables;
        - COFFEE_MACHINE_SCRIPT_LOADED=true
        - COFFEE_PODS_SCRIPT_LOADED=true
    - afterwards, restart the server with `npm run dev`
 
 #  Running Tests
 
 To run test, enter the command below:
      `npm run tests`
