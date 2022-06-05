"use strict";

module.exports = (function () {
  function Parser(argsList){
    this.argsList = argsList.map(function (a) {
      return a;
    })
  }

  /**
   * @description If cli has hyphen for -U return the element ahead of it
   * @return {string} Default user is postgres
   */
  Parser.prototype.getPgUser = function (credentials) {
    if (this.argsList.indexOf("-U") !== -1) {
      return this.argsList[this.argsList.indexOf("-U") + 1]
    }

    return 'me'; 
  };

  /**
   * @description If cli has hyphen for -p retrieve password
   * @return {string} Default pw is undefined
   */
  Parser.prototype.getPgPassword = function (credentials) {
    if (this.argsList.indexOf("-p") !== -1) {
      return this.argsList[this.argsList.indexOf("-p") + 1]
    } 

    return undefined;
  };

  /**
   * @description Gets port to be used for the Database connection
   * @return {} Default port for postgres is 5432
   */
  Parser.prototype.getDbPort = function (credentials) {
    if (this.argsList.indexOf("-t") !== -1) {
      return this.argsList[this.argsList.indexOf("-t") + 1]
    }

    return 5432; 
  };


  /**
   * @description If cli has hyphen for -d retrieve Dev Machine User
   * @return {number} Default Dev Machine User is localdev
   */
  Parser.prototype.getDevMachineUser = function (credentials) {
    if (this.argsList.indexOf("-d") !== -1) {
      return this.argsList[this.argsList.indexOf("-d") + 1]
    } 

    return 'localdev'
  };

  return Parser;
})()
