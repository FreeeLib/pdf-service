import { Sequelize } from 'sequelize';

import ShiftKpi from './shiftKpi';

const env = process.env.NODE_ENV || 'development';
const config = require('../../../config/config.js')[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    port: config.port,
    logging: false,
  }
);

//Do Not Change: The order of this matters during associations. Parent table should always be below the child table.
const db = {
  sequelize,
  ShiftKpi: ShiftKpi(sequelize),
};

export default db;
