const bcrypt = require('bcrypt');

module.exports = function (sequelize, DataTypes) {


    const User = sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      fName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      bName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      accountType: {
        type: DataTypes.STRING,
        allowNull: false
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
        timestamps: false
    }, {
        hooks: {
          beforeCreate: (user) => {
            const salt = bcrypt.genSaltSync();
            user.password = bcrypt.hashSync(user.password, salt);
          }
        }
    });
    
    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
      };

    return User;
  
  }