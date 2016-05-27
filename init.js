var getClients = require('./getClients');
var request = require('request');
var config = require('./config');
function init() {
    var url = config.url;
    var options = {
        headers: {
            Accept: 'text / html, application/xhtml+xml,application/xml;q=0.9, image/webp,*/*;q=0.8',
            Authorization: config.Authorization
        }
    };
    console.log('Iniciando\n');
    request.get(url, options, function (error, res) {
        if (error) return console.log(error)
        getClients(res);
    });
}

module.exports = init;