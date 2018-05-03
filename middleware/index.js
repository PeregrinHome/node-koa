module.exports = function (app) {
    require('.//01-favicon').init(app);
    require('.//02-static').init(app);
    require('.//03-logger').init(app);
    require('.//04-templates').init(app);
    require('.//05-errors').init(app);
    require('.//06-session').init(app);
    require('.//07-bodyParser').init(app);
    require('.//08-multipartParser').init(app);
};