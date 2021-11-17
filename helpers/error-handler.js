
function error (err, req, res, next) {
    console.log(err)
    if (err.name === 'UnauthorizedError') {
        return res.status(401).send({ message: 'You are not a authorize user' })
    }

    if (err.name === 'ValidationError') {
        return res.status(401).send({ message: 'server error' })
    }
    return res.status(401).json(err)

}

module.exports = error;