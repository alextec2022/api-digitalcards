const CardModel = (sequelize, type) => {
  return sequelize.define("card", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: type.STRING,
    userId: {
      type: type.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
  });
};
export default CardModel;
