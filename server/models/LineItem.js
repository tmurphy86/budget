module.exports = function(sequelize, DataTypes) {
    var LineItem = sequelize.define("lineitem", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 45]
            }
        },
        reoccurance: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            DEFAULT: true,
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "yearly",
            validate: {
                len: [1, 45]
            }
        },
        cost: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            validate: {
                ///
            }
        },
        description: {
            type: DataTypes.BLOB
        },
        archive: {
            type: DataTypes.BOOLEAN
        }
    });

//     LineItem.associate = new function(models) {
//     LineItem.hasMany(models.SubCat, {
//         onDelete:'cascade'

//     });

// };

    return LineItem;
};



//   `category_category_id` int(11) NOT NULL,
//   `subcategory_tags_subcategory_id` int(11) NOT NULL,


//   `cost` varchar(45) NOT NULL,
//   `archive` tinyint(4) NOT NULL DEFAULT '0',
//   `description` blob,
//   `team_team_id` int(11) NOT NULL,
//   `project_project_id` int(11) NOT NULL,
//   `large_data_data_id` int(11) NOT NULL,
//   `office_location_office_id` int(11) NOT NULL,
//   PRIMARY KEY 
//   });
//   return Todo;
// };
