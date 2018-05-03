// no templates in ctx example
const ejs = require('ejs-promise');
const path = require('path');

exports.init = (app) => app.use(async (ctx, next) => {
    // in the future we'll extend this
    ctx.render = function (templatePath, locals) {
        let promiseTemplate;
        ejs.renderFile(path.join(process.env.DIRNAME, 'templates', templatePath), locals, {}, function (err, resultPromise) {
            promiseTemplate = resultPromise;
        });
        return promiseTemplate;
    };
    await next();
});
