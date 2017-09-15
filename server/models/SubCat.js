module.exports = function(sequelize, DataTypes) {
    var SubCat = sequelize.define("subcategory", {
        subcategory_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 45]
            }
        }
    });

  // SubCat.associate = function(models) {
  //   // We're saying that a Post should belong to an Author
  //   // A Post can't be created without an Author due to the foreign key constraint
  //   SubCat.belongsTo(models.LineItem, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
    return SubCat;
}
