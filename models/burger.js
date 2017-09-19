var orm = require('../config/orm');


var burgers = {


    all: function(cb) {
        orm.selectAll("burgers", function(res) {

            cb(res);
        });

    },

    create: function(burger_name, cb) {

        orm.create("burgers", burger_name, function(cb) {

            cb(res);

        })
    },

    update: function(id, cb) {

        orm.update("burgers", id, function(cb) {

            cb(res);

        })
    }


};

module.exports = burgers;