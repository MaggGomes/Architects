var config = {};

config.mail = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: '', // preencher user e password
        pass: ''
    }
};

module.exports = config;