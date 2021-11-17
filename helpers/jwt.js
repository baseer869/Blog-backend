const expressJwt = require('express-jwt');
require('dotenv')

function  jwt(){
    const secret = process.env.SECRET;

    return (
         expressJwt({secret: secret, algorithms:['HS256'] }).unless({
             path :[{
                // speficed method 
             },
            "/api/v1/login" 
            
            ]
         })
    )
}

module.exports = jwt;