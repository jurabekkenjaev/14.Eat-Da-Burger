var connection = require("./connection.js")

var orm = {

    selectAll: function(table, cb) {

        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result) {

            if (err) {

                throw err;
            }

            cb(result);
        });


    },

    create: function(table, burger_name, cb) {

        var queryString = "INSERT INTO " + table + "burger_name" + "VALUES(" + name + ")";

        connection.query(queryString, function(err, result) {
            if (err) {

                throw err;
            }

            cb(result);
        });

    },


    update: function(table, id, cb) {

        var queryString = "UPDATE " + table + " SET devoured=true WHERE id=" + id;


        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });

    }



}

module.exports = orm;