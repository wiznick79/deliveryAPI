# glazed
Glazed Web App + API

This web-based app provides the customer with a front-end to create a delivery, for products or any other services.
Customer must create an account, then login and choose the store and the date/time for the delivery.
The admin of the system after login, can see an admin dashboard with options to :
  - Create a new store
  - Create a new delivery timeslot
  
Technologies/libraries/frameworks used:
 - Front-end: Reactjs, React-bootstrap
 - Back-end: Nodejs, Expressjs, Passportjs, MongoDB, Mongoose 
 
The app is deployed on Heroku platform, for testing,etc : https://glazed-app.herokuapp.com/

At this point the admin of the system must be assigned manually by changing the role
from the default 'user' to 'admin' in the database (eg. using MongoDB Compass).

The available endpoints of the API are:
 - For users:
  - /user (GET): to get the currently logged in user
  - /user/login (POST): to post the login info and authenticate the user
  - /user/register (POST): to post the registration info and register the user
  - /user/logout (POST): to logout the user
 - For stores:
  - /store (GET): to get all available stores
  - /store/:id (GET): to get the store by its id
  - /store/create (POST): to create a new store
  - /store/update/:id (PUT): to update an existing store
  - /store/delete/:id (DELETE): to delete a store
 - For slots:
  - /slot (GET): to get all available slots
  - /slot/:id (GET): to get the slot by its id
  - /slot/create (POST): to create a new slot
  - /slot/update/:id (PUT): to update an existing slot
  - /slot/delete/:id (DELETE): to delete a slot
 - For deliveries:
  - /delivery (GET): to get all created deliveries
  - /delivery/:id (GET): to get the delivery by its id
  - /delivery/create (POST): to create a new delivery
  - /delivery/update/:id (PUT): to update an existing delivery
  - /delivery/delete/:id (DELETE): to delivery a slot
