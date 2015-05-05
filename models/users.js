var pg = require('pg');
var conString = process.env.DATABASE_URL || "postgress://admin:guest@localhost/boxdatabase";


module.exports = {
    getUser: function(name, callback) {
        pg.connect(conString, function(err, client, done) {
            if(err) {
                console.log('Error ' + err);
            }
            var sql = 'SELECT * FROM users WHERE name=$1;';
            client.query(sql, [name], function(err, result) {
                if(err) {
                    console.log('Error ' + err);
                }
                done();
                callback(result.rows[0]);
            });
        });
    },


    addUser: function(name, password) {
        pg.connect(conString, function(err, client, done) {
            if(err) {
                console.log('Error ' + err);
            }
            var sql = 'INSERT INTO users(name, password) VALUES($1, $2);'; 
            client.query(sql, [name, password], function(err) {
                if(err) {
                    console.log('Error ' + err);
                }
                done();
            });
        });
    }
};
