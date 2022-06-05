"use strict";


const dbConfig = require("../../config/db.config.js");
const Sequelize = require("sequelize");


/**
 * @param
 * @returns {Promise} 
 */ 
module.exports = (async function takeAction(dbConfig,Sequelize) {
  let {USER, DB, PORT, PASSWORD} = dbConfig;
  let connectionUri = `postgres://${USER}@localhost:${PORT.toString()}/${DB}`;
  if (typeof PASSWORD !== "undefined") {
    let [protocol,resource] = connectionUri.split('@');
    let credentials = `${protocol}:${PASSWORD}`
    connectionUri = [credentials,'@',resource].join('');
  }
  
  

  // at this point the DB should be loaded
  // returns promise so the requiring file can wait
  // for promise to finish
  let sequelize =  new Sequelize(connectionUri, {
    dialectOptions: {
      "ssl": false
    },
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  });

  let model = {};
  model.sequelize = sequelize;
  return model;


  // sequelize
  //   .authenticate()
  //   .then(res => {
  //     // by default sequelize doesn't return anything after 
  //     // the promise for authenticate resolves
  //     console.log("Connection to DB established"); 
  //   })
  //   .catch(err => {
  //     console.log("unable to connect: ",err);
  //   })
    

})(dbConfig,Sequelize)