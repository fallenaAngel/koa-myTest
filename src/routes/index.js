const fs = require('fs')
const router = require('koa-router')() // 注意：加小括号，实例化router

// 使用prefix方法，为所有的接口添加BaseURl
router.prefix('/api')

// 基础用法，fs读取的方式返回页面
router.get('/index', async (ctx, next) => {
    ctx.response.type = 'text/html'
    ctx.response.body = fs.createReadStream('./src/view/index.html')
})

// get方式传参
router.get('/home/:id', async (ctx, next) => {
    ctx.response.body = `this is ${ctx.params.id}`
})

// 基础用法，koa-views模板引擎的方式返回页面
router.get('/page/index', async (ctx, next) => {
    await ctx.render('index')
})
module.exports = router
