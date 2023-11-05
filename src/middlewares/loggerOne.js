require('dotenv').config();

const loggerOne = (request, response, next) => {
    console.log('an original url: ' + process.env.API_URL+':'+process.env.PORT);
    next();
};

module.exports = loggerOne;