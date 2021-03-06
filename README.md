[![Codacy Badge](https://app.codacy.com/project/badge/Grade/5f4c7fc9f28c4e0495da536f55d7e917)](https://www.codacy.com/gh/wiznick79/deliveryAPI/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=wiznick79/deliveryAPI&amp;utm_campaign=Badge_Grade)

# deliveryAPI
API in Nodejs/Expressjs and web app in Reactjs

This web-based app provides the customer with a front-end to create a delivery, for products or any other services.
Customer must create an account, then login and choose the store and the date/time for the delivery.
The admin of the system after login, can see an admin dashboard with options to :
-   Create a new store
-   Create a new delivery timeslot

Technologies/libraries/frameworks used:
-   Front-end: Reactjs, React-bootstrap
-   Back-end: Nodejs, Expressjs, Passportjs, MongoDB, Mongoose

The app is deployed on Heroku platform, for testing,etc : https://delivery-nodejs-api.herokuapp.com/

The available endpoints of the API are:

For users:
-   /user (GET): to get the currently logged in user
-   /user/login (POST): to post the login info and authenticate the user
-   /user/register (POST): to post the registration info and register the user
-   /user/logout (POST): to logout the user

For stores:
-   /store (GET): to get all available stores
-   /store/:id (GET): to get the store by its id
-   /store/create (POST): to create a new store
-   /store/update/:id (PUT): to update an existing store
-   /store/delete/:id (DELETE): to delete a store

For slots:
-   /slot (GET): to get all available slots
-   /slot/:id (GET): to get the slot by its id
-   /slot/create (POST): to create a new slot
-   /slot/update/:id (PUT): to update an existing slot
-   /slot/delete/:id (DELETE): to delete a slot

For deliveries:
-   /delivery (GET): to get all created deliveries
-   /delivery/:id (GET): to get the delivery by its id
-   /delivery/create (POST): to create a new delivery (needs user by his id, store by its id, slot by its date)
-   /delivery/update/:id (PUT): to update an existing delivery
-   /delivery/delete/:id (DELETE): to delete a delivery

Notes:
1.  At this point the admin of the system must be assigned manually by changing the role from the default 'user' to 'admin' in the database (eg. using MongoDB Compass).

2.  The database connection string must be added in your .env file as DATABASE_URL. Same for PORT.

3.  To run locally:
    -   'npm run dev' at the root folder to start Nodejs server
    -   'npm start' in the react-app folder to build and run the React app
    -   access the app in the url: http://localhost:3000