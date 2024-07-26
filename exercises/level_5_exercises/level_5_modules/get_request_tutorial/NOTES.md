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

#