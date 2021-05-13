import { Sequelize } from 'sequelize';

import usersFactory from './User';

const sequelize = new Sequelize(
  process.env.DATABASE_CONNECTION_STRING ?? 'postgres://user:pass@example.com:5432/dbname',
);

const models = {
  User: usersFactory(sequelize),
};

Object.values(models).forEach((model) => {
  if ('associate' in model) {
    model.associate(models);
  }
});

export { sequelize };
export default models;
export type ModelsMap = typeof models;
export type AssociateMethod = (modelsMap: typeof models) => void;
