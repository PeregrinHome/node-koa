require('dotenv').config();
// A "closer to real-life" app example
// using 3rd party middleware modules
// P.S. MWs calls be refactored in many files

// long stack trace (+clarify from co) if needed

// В продакшене раскоментировать, иначе нагрузка увеличится в 3 раза
if (process.env.TRACE === "dev") {
    require('./libs/trace');
}
process.env.DIRNAME = __dirname;


const Koa = require('koa');
const app = new Koa();
const config = require('config');

const middleware = require('./middleware/index');
middleware(app);

require('./DB/index')(config);

const router = require('./routers/index');

app.use(router.routes());

app.listen(config.get('port'));
