'use strict'

const Controller = require('egg').Controller
const { Route, HttpGet } = require('egg-decorator-router')
@Route()
class HomeController extends Controller {
  @HttpGet('/')
  @HttpGet('*')
  async index() {
    const { ctx } = this

    await ctx.vite.render('index.html', { appTitle: 'vite vue2' })
  }

  @HttpGet('/api')
  api() {
    const { ctx } = this

    ctx.body = 'hi, egg'
  }
}

module.exports = HomeController
