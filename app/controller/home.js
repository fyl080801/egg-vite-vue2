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
}

module.exports = HomeController
