'use strict';

const connect = require('koa-connect');
const { createServer } = require('vite');

module.exports = () => {
  return async (ctx, next) => {
    await ctx.resolveServer();

    // 因为vite的中间件是基于express，而egg是基于koa，因此要转换
    await connect(ctx.vite.middlewares)(ctx, next);
  };
};
