const creatError = require("http-errors");


// 404 not found
function notFoundHandler(req,res, next){
    next(creatError(404, "your requested content was not found"));
}

// function defultl
function errorHandler(err, req, res, next){
    
}
module.exports={
    notFoundHandler,
    errorHandler,
}