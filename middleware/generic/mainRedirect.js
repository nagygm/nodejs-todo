/**
 * Redirects to Login when not logged in, and to todos when logged in.
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {

        if (typeof req.session.userid === 'undefined') {
            return res.redirect('/login');
        } else {
            return res.redirect('/todos');
        }
    };

}