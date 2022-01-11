'use strict';

const { Service } = require('egg');
const { createServer } = require('vite');

const serviceToken = Symbol('serviceToken');

class ViteService extends Service {
  get _service() {
    return this[serviceToken];
  }
  set _service(value) {
    this[serviceToken] = value;
  }
  async getServer() {
    if (!this._service) {
      this._service = await createServer();
    }

    return this._service;
  }
}

module.exports = ViteService;
