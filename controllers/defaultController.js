async function index(ctx, next) {
    // ctx.redirect('/views');

    ctx.body = '1';
}
async function auth(ctx, next) {
    if (ctx.params.user === 'admin') {
        await next();
        return;
    }

    ctx.throw(403);
}
async function user(ctx, next) {
    ctx.body = "Hello, " + ctx.params.user;
}
async function views(ctx, next) {
    let count = ctx.session.count || 0;
    ctx.session.count = ++count;
    // ctx.body = ejs.render('<%= user; %>', {
    ctx.body = await ctx.render('index.ejs', {
        user: 'John',
        count
    });
}

module.exports = {
    index,
    auth,
    user,
    views
};

