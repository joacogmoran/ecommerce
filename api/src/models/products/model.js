const {db} = require('../../../index');
const {DataTypes} = require('sequelize');

const users = db.define('Products', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    }
});

module.exports = users;