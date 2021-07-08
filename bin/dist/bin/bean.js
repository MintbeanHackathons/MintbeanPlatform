#!/usr/bin/env node
"use strict";
var Command = require('commander').Command;
var mbService = require('./mb-service');
var root = new Command();
root.version('Version for this controller is untracked');
root
    .command('environment <env>')
    .alias('e')
    .action(function (env) {
    mbService.setEnvironment(env);
});
root
    .command('describe')
    .action(function () {
    console.log('ok');
});
root.parse(process.argv);
