// DB config

var mysql = require('mysql')
    , async = require('async');

var PRODUCTION_DB = 'rochaleite'
    , TEST_DB = 'rochaleite_test';

exports.MODE_TEST = 'mode_test';
exports.MODE_PRODUCTION = 'mode_production';

var state = {
    pool: null,
    mode: null
};

exports.connect = function(mode, done) {
    state.pool = mysql.createPool({
        host: '',
        user: '',
        password: '',
        database: mode === exports.MODE_PRODUCTION ? PRODUCTION_DB : TEST_DB
    });

    state.mode = mode;
    done()
};

exports.get = function() {
    return state.pool
};
