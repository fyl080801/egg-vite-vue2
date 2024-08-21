'use strict';

const Controller = require('egg').Controller;
const fs = require('node:fs');
const path = require('node:path');

class HomeController extends Controller {
  async index() {
    // 使用vite服务输出视图
    const html = await this.ctx.vite.transformIndexHtml(
      this.ctx.request.url,
      await fs.promises.readFile(
        path.join(process.cwd(), 'index.html'),
        'utf-8',
      ),
    );

    console.log(html);

    this.ctx.body = await this.ctx.renderString(html, {
      serverData: {
        text: 'server template data',
      },
    });
  }

  api() {
    this.ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
