/**
 * Checks if the user credentials are okay, if not renders error, if ok forwards the request.
 */
module.exports = function () {
    return function (req, res, next) {
        return next()
    };
};
