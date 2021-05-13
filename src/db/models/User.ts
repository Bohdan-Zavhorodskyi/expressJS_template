import { Sequelize, DataTypes, Model } from 'sequelize';
import { ModelsMap } from './index';

export class User extends Model {
  public uuid!: string;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public password!: string | null;
  public createdAt!: string;
  public updatedAt!: string | null;

  static associate(models: ModelsMap) {
    // null
  }
}

export default (sequelize: Sequelize) => {
  User.init(
    {
      uuid: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      lastName: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
          notEmpty: true,
        },
      },
      password: {
        type: DataTypes.STRING,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: 'user',
      underscored: true,
      sequelize,
      modelName: 'User',
      paranoid: true,
    },
  );
  return User;
};
