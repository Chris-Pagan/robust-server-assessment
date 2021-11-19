function methodNotAllowed(req, res, next){
    next({
        status: 405,
        message: `${req.method} nto allowed for ${req.originalUrl}`,
    });
}

module.exports = methodNotAllowed;