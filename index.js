'use strict';

var bower = require('bower');
var Promise = require('promise');

module.exports = {
  commands: {
    info: function (name, opts) {
      return new Promise(function (resolve, reject) {
        bower.commands.info(name, opts).on('end', resolve).on('error', reject);
      });
    }
  }
};
