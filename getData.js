var getClients = require('./getClients');
function init() {
    var request = require('request');
    var url = 'http://192.168.1.1/userRpm/AssignedIpAddrListRpm.htm';
    var options = {
        headers: {
            Accept: 'text / html, application/xhtml+xml,application/xml;q=0.9, image/webp,*/*;q=0.8',
            Authorization: 'Basic YWRtaW46YWRtaW4='
        }
    };
    console.log('Iniciando\n');
    request.get(url, options, function (error, res) {
        if (error) return console.log(error)
        getClients(res);
    });
}

module.exports = init;