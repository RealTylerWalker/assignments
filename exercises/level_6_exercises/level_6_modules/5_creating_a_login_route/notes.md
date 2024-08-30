Getting started

1. <!-- npm init -y : this creates the package JSON file -->

2. Then install the following: 

express: express is for creating the server

dotenv: dotenv is for creating environment variables

mongoose: mongoose is for connecting to MongoDB

<!-- npm i express mongoose morgan dotenv -->

3. then create a .env filele and add the following:
add the following to the .env file

MONGO_URI= //connection string

PORT= //choose a port

4. Then go to MONGO DB and create a new project, get the connection string and add it to the .env file
5. create a folder for "models" and a folder for "routes"
6. in the models folder create a file called user.js, read what is inside the file for what you should do next
7. go back to the .env file and add the following:

 SECRET= //choose a secret (it will usually be four random words)

8. in the routes folder create a file called user.js, read what is inside the file for what you should do next
9. create authRouter file inside the route folder 
10. install a jsonwebtoken package so we can use JWS tokens

