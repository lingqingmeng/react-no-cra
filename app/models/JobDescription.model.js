module.exports = (sequelize, Sequelize) => {
  const JobDescription = sequelize.define("job_description", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    salary_floor: {
      type: Sequelize.BIGINT
    },
    salary_ceiling: {
      type: Sequelize.BIGINT
    },
    options: {
      type: Sequelize.JSONB
    }
  });

  return JobDescription;
};
