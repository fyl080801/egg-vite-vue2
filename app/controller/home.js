'use strict';

const Controller = require('egg').Controller;

const fs = require('fs');

const path = require('path');

class HomeController extends Controller {
  async index() {
    const server = await this.ctx.service.vite.getServer();

    const html = await server.transformIndexHtml(
      this.ctx.request.url,
      await fs.promises.readFile(
        path.join(process.cwd(), 'index.html'),
        'utf-8',
      ),
    );

    this.ctx.body = await this.ctx.renderString(html, {
      SERVER_DATA: 'server template data',
    });
  }
}

module.exports = HomeController;
