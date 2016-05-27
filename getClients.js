function getClients(res) {
    var cheerio = require('cheerio');
    var $, script, data, ips = [], counter = 0, ip = {}, i = 1;
    $ = cheerio.load(res.body);
    script = $('script');
    data = eval(script[0].children[0].data);
    counter = 0;
    while (DHCPDynList.length > counter) {
        if (DHCPDynList[counter + 4]) {
            ip = {
                'ID': i,
                'Client': DHCPDynList[counter],
                'Name': DHCPDynList[counter + 4],
                'MACAddress': DHCPDynList[counter + 1],
                'AssignedIP': DHCPDynList[counter + 2],
                'LeaseTime': DHCPDynList[counter + 3],
            };
            counter += 4;
            i += 1;
            ips.push(ip);
            console.log('Client: ', ip.Client);
            console.log('Name: ', ip.Name);
            console.log('AssignedIP: ', ip.AssignedIP);
            console.log('MACAddress: ', ip.MACAddress);
            console.log('LeaseTime: ', ip.LeaseTime);
            console.log('\n');
        }
    }
    return ips;
}

module.exports = getClients;