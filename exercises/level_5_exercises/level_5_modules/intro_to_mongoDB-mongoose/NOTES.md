# Intro to Express

    # Initialize a new node project
        - npm init -y
        - npm install express

# Vocabulary 

    # Route
        * An event listener for http requests


    # Endpoint
        * e.g. "./item"  "/user"


    # Port
        * Important to use a port somewhere between 3001 and 9000 
        - e.g. localhost:9000

# Nodemon
    * npm install -g nodemon 
    - the -g flag installs nodemon globally on your machine so that it's always available regardless of the current working directory.
    - nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

    - instead of using:
         node server.js
         
        we will NOW need to use:
         nodemon server.js

# Express Router - Enables us to modularize our routes in express

# npx create-react-app . 
    - This creates a new new react app in the current directory

# How to connect my backend to my frontend
    - create a folder called "client"
    - cd into client and run the command "npx create-react-app ."
    - open the package.json file in the client folder and just before the closing } the add "proxy": "http://localhost:9000" or whatever port you are using
    - go into the terminal and add another terminal window for the the client folder and run "npm start" and inside the terminal window for the server folder run "nodemon server.js"


# requests to MY server Vs. requests to an external server
    - requests to my server will begin simply with a "/"
    - requests to an external server will begin with a "https://"

# Error Handling 
    -For the server.js file (This is a global error handler)
    app.use( (err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

    -For the client.js file (this is the logic if you are not using an api)
    if(!foundBounty){
        const error = new Error(`The bounty with the id of ${bountyId} was not found.`)
        return next(error) 
    }
    res.status(200).send(foundBounty)

# Status Codes  
    # 200 - sucessful request
    # 201 - Successful Insert (added something to the database) / Succesful Update (updated something in the database)
    # 401 - not authorized
    # 404 - not found
    # 500 - server error

# MongoDB & mongoose
    - npm install mongoose
    - npm install dotenv
    - npm install --save-dev nodemon
    - npm install cors

# MongoDB Atlas
    -