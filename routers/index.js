
// can be split into files too
const Router = require('koa-router');

const router = new Router();

const defaultController = require('../controllers/defaultController');
router.get('/views', defaultController.views);
router.get('/user/:user/hello', defaultController.auth, defaultController.user);
router.get('/', defaultController.index);
// router.get('/views', async (ctx, next) => {
//     let count = ctx.session.count || 0;
//     ctx.session.count = ++count;
//     // ctx.body = ejs.render('<%= user; %>', {
//     ctx.body = await ctx.render('index.ejs', {
//         user: 'John',
//         count
//     });
// });


// параметр ctx.params
// см. различные варианты https://github.com/pillarjs/path-to-regexp
//   - по умолчанию 1 элемент пути, можно много *
//   - по умолчанию обязателен, можно нет ?
//   - уточнение формы параметра через regexp'ы
// router.get('/user/:user/hello',
//     async (ctx, next) => {
//         if (ctx.params.user === 'admin') {
//             await next();
//             return;
//         }
//
//         ctx.throw(403);
//     },
//     async function (ctx) {
//         ctx.body = "Hello, " + ctx.params.user;
//     }
// );

// router.get('/', async function (ctx) {
//     // ctx.redirect('/views');
//
//     ctx.body = '1';
// });

module.exports = router;