module.exports = function (app, dir) {
    require('../handlers/01-favicon').init(app);
    require('../handlers/02-static').init(app);
    require('../handlers/03-logger').init(app);
    require('../handlers/04-templates').init(app, dir);
    require('../handlers/05-errors').init(app);
    require('../handlers/06-session').init(app);
    require('../handlers/07-bodyParser').init(app);
    require('../handlers/08-multipartParser').init(app);
};