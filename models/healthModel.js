module.exports = function(sequelize, DataTypes){
    var User = sequelize("user", {
        Last_Name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        First_Name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        ZIP: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [5,5]
            }
        }
    })
    return User
}