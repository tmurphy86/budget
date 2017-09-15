module.exports = function(sequelize, DataTypes) {
    var Dept = sequelize.define("department", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 45]
            }
        }
    });
    return Dept;
}