module.exports = function(sequelize, DataTypes) {
    var Cat = sequelize.define("category", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 45]
            }
        }
    });

    // Cat.associate = function(models) {
    //     Cat.hasMany(models.lineitem, {
    //         onDelete: 'cascade'
    //     });

    // };


    return Cat;
}