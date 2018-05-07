// no templates in ctx example
const ejs = require('ejs-promise');
const path = require('path');
const config = require('config');

exports.init = (app) => app.use(async (ctx, next) => {
    // in the future we'll extend this
    ctx.render = function (templatePath, locals) {
        let promiseTemplate;
        ejs.renderFile(path.join(config.get('root'), 'templates', templatePath), locals, {}, function (err, resultPromise) {
            promiseTemplate = resultPromise;
        });
        return promiseTemplate;
    };
    await next();
});
