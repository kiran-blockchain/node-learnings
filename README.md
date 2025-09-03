
1. I want to create user table
    - firstname
    - lastname
    - email
    - password
    - dateOfBirth
    - createdDatetime
    - modifiedDatetime 

-- i should able to signup , signin, resetPassword, edit profile,

-- node issues a json webtoken
   -- encrypted strinn will be sent to client.
   - client will store this token 
     -- username
     -- email 
     -- or any javascript object
   - next any request will be called from client to the server they will send this token as a authentication
   - server will intercept the token and then reads the data embeded in the token so that server can identify the client.