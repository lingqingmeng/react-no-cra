module.exports = (async function takeAction(dbConfig,Sequelize) {
	console.log("dbConfig,Sequelize: ",dbConfig,Sequelize);
	const p1 = new Promise((res) => setTimeout(() => res("p1"), 1000));
	return p1;

})(dbConfig,Sequelize)

// see resource 
// https://stackoverflow.com/questions/20315434/node-js-asynchronous-module-loading