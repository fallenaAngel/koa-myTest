const Koa = require('koa')
const koaStatic = require('koa-static')
const koaViews = require('koa-views')
const path = require('path')

const app = new Koa()
const staticPath = koaStatic(path.join(__dirname, './src/static'))

// ** 注意：静态资源访问路径或者模板引擎放到路由渲染之前，否则访问不到
app.use(staticPath) // 设置静态资源访问路径
app.use(koaViews(path.join(__dirname, './src/view'))) // 使用koa-views模板引擎来渲染页面而不是fs.read读取

const Router = require('./src/routes/index.js')
app.use(Router.routes(), Router.allowedMethods()) // allowedMethods是校验请求的方法，如果是post方式请求get接口，就会直接返回失败

app.listen(3000, function () {
    console.log('http://localhost:3000')
})