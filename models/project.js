module.exports = function(sequelize, DataTypes) {
    var Project = sequelize.define("Post", {
        Poject_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Project_type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Project_descripton: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        }
    });

    Project.associate = function(models) {
        models.Project.belongsTo(models.user, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };

    // Project.belongsToMany(User, {through: 'UserProject'});
    // User.belongsToMany(Project, {through: 'UserProject'});

    return Project;
};