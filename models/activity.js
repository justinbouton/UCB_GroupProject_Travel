module.exports = function(sequelize, Sequelize) {
 
    let Activity = sequelize.define('activity', {
 
        activity_name: {
            primaryKey: true,
            type: Sequelize.STRING
        },
 
        location_name: {
            type: Sequelize.STRING
        }
    });
 
    return Activity;
 
}