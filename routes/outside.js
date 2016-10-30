var mainRedirectMW = require('../middleware/generic/mainRedirect');
var checkUserLoginMW = require('../middleware/user/checkUserLogin');
var authMW = require('../middleware/generic/auth');
var logoutMW = require('../middleware/generic/logout');
var renderMW = require('../middleware/generic/render');

module.exports = function (app) {
    /**
     * Main page
     */
    app.get('/',
            mainRedirectMW()
    );

    /**
     * Login page
     */
    app.use('/login',
            renderMW('login')
    );

    /**
     * Logout and redirect to Main page
     */
    app.get('/logout',
            logoutMW(),
            function(req, res, next){
                res.redirect('/');
            }
    );
};