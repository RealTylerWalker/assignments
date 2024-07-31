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

#