module.exports = function(sequelize, Sequelize) {
 
    let Date = sequelize.define('date', {
 
        date_id: {
            primaryKey: true,
            type: Sequelize.DATEONLY
        },
 
        trip_id: {
            type: Sequelize.INTEGER
        }
    });
 
    return Date;
 
}