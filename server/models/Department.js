module.exports = function(sequelize, DataTypes) {
    var Dept = sequelize.define("department", {
        department_name: {
            type: DataTypes.STRING,
            allowNull: false
            // validate: {
            //     len: [1, 45]
            // }
        }
    });
console.log(Dept);
    return Dept;
}