import { Sequelize } from "sequelize";
import UserModel from "../models/user.js";
import CardModel from "../models/card.js";

const sequelize = new Sequelize(
  process.env.MYSQLDB_DATABASE,
  process.env.MYSQLDB_USER,
  process.env.MYSQLDB_ROOT_PASSWORD,
  {
    host: process.env.MYSQLDB_HOST,
    dialect: "mysql",
  }
);

const User = UserModel(sequelize, Sequelize);
const Card = CardModel(sequelize, Sequelize);
sequelize.sync({ force: false }).then(() => {
  console.log("Tablas sincronizadas");
});

export { User, Card };
