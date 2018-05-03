// no templates in ctx example
const ejs = require('ejs-promise');
const path = require('path');

exports.init = (app, dir) => app.use(async (ctx, next) => {
    // in the future we'll extend this
    ctx.render = function (templatePath, locals) {
        let promiseTemplate;
        ejs.renderFile(path.join(dir, 'templates', templatePath), locals, {}, function (err, resultPromise) {
            promiseTemplate = resultPromise;
        });
        return promiseTemplate;
    };
    await next();
});
