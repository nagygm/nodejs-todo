var mainRedirectMW = require('../middleware/generic/mainRedirect');
var checkUserLoginMW = require('../middleware/user/checkUserLogin');
var authMW = require('../middleware/generic/auth');
var renderMW = require('../middleware/generic/render');

module.exports = function (app) {
    /**
     * This is he main page after logging in, everything else will be loaded with ajax, on this
     * page.
     */

    /**
     * For testing purposes will be deleted
     */
    app.use(function (req, res, next){
        res.tpl = {};
        res.tpl.todos = [
            {title: "testTodo", opened: true}, {title: "testTodo2", opened: false}
        ];
        return next()
    });

    app.use('/todos',
            renderMW('todos')
    );

    app.use('/todos/new',
            renderMW('todos')
    );

    app.use('/todo/:todoid/delete',
            renderMW('todos')
    );

    app.use('/todo/:todoid/update',
            renderMW('todos')
    );

    app.use('/todo/:todoid/share',
            renderMW('todos')
    );

    app.use('/todo/:todoid/details',
            renderMW('todos')
    );


};