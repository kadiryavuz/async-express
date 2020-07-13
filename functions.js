const fetch = require('node-fetch');

module.exports.asyncHandler = (cb) => {
    return async (req, res, next) => {
        try {
            await cb(req, res, next);
        } catch (err) {
            res.render('error', { error: err });
        }
    }
}

module.exports.fetchUsers = () => {
    return new Promise((resolve, reject) => {
        fetch('https://randomuser.me/api/?results=4')
            .then(res => resolve(res.json()))
            .catch(err => reject(err));
    })
}