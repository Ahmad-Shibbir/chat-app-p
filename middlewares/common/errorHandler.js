const creatError = require("http-errors");


// 404 not found
function notFoundHandler(req,res, next){
    next(creatError(404, "your requested content was not found"));
}

// function defultl
function errorHandler(err, req, res, next){
    res.locals.error=
        process.env.NODE_ENV === 'development' ? err: {message: err.message};

    res.status(err.status || 500);

    if(res.locals.html){
        // html response
        res.render('error',{
            title:"Error page",
        });
    }else{
        // json response
        res.json(res.locals.error)
    }
}
module.exports={
    notFoundHandler,
    errorHandler,
}