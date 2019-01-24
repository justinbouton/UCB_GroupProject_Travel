module.exports = function(sequelize, Sequelize) {
 
    let Trip = sequelize.define('trip', {
 
        trip_id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        user_id: {
            type: Sequelize.INTEGER
        },
        
        trip_name: {
            type: Sequelize.STRING
        },

        departDate: {
            type: Sequelize.DATE
        },

        returnDate: {
            type: Sequelize.DATE
        },

        locations: {
            type: Sequelize.TEXT
        },

        activities: {
            type: Sequelize.TEXT
        },

        isPrevious: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    });
 
    return Trip;
}