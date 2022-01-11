'use strict';

function makeInjectedResponse(ctx, end) {
  const res = ctx.res;

  res.on('close', end).on('finish', end);

  const dummyRes = Object.create(res);
  ['setHeader', 'writeHead', 'write', 'end'].forEach((name) => {
    dummyRes[name] = (...args) => {
      res[name](...args);
      // koa2.0 initial assign statusCode to 404, reset to 200
      if (res.statusCode === 404) {
        res.statusCode = 200;
      }
    };
  });
  ['statusCode', 'statusMessage'].forEach((name) => {
    dummyRes.__defineSetter__(name, (value) => {
      res[name] = value;
    });
  });

  return dummyRes;
}

function handler(ctx, connectMiddleware) {
  return new Promise((resolve, reject) => {
    const args = [
      ctx.req,
      makeInjectedResponse(ctx, () => {
        resolve(false);
      }),
    ];
    let assumeSync = true;

    if (connectMiddleware.length >= 3) {
      args.push((err) => {
        if (err) reject(err);
        else resolve(true);
      });
      assumeSync = false;
    }

    if (connectMiddleware.length >= 4) {
      args.unshift(null);
    }

    connectMiddleware(...args);

    if (assumeSync) {
      resolve(true);
    }
  });
}

function koaConnect(connectMiddleware) {
  return async (ctx, next) => {
    ctx.respond = false;
    try {
      const goNext = await handler(ctx, connectMiddleware);
      if (goNext) {
        ctx.respond = true;
        return next();
      }
    } catch (err) {
      ctx.respond = true;
      throw err;
    }
  };
}

module.exports = () => {
  return async (ctx, next) => {
    const server = await ctx.service.vite.getServer();

    // 因为vite的中间件是基于express，而egg是基于koa，因此要转换
    await koaConnect(server.middlewares)(ctx, next);
  };
};
