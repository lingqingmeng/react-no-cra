"use strict";

const Parser = require("../parser");
let parser = new Parser(process.argv);

let dbConfig = {
  HOST: "localhost",
  USER: parser.getPgUser(),
  PASSWORD: parser.getPgPassword(),
  DB: parser.getDevMachineUser(),
  PORT: parser.getDbPort(),
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
module.exports = dbConfig;
