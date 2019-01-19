module.exports = function(sequelize, Sequelize) {
 
    let Location = sequelize.define('location', {
 
        location_name: {
            primaryKey: true,
            type: Sequelize.STRING
        },
 
        date_id: {
            type: Sequelize.DATEONLY
        }
    });
 
    return Location;
 
}