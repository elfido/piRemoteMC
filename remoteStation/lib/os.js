'use strict';

var os = require('os');
var Nics = os.networkInterfaces();

var OSInfo = {
  getNetworkInfo: function(){
    var nics = new Array();
    Object.keys(Nics).forEach(function (ifname) {
      var alias = 0;

      Nics[ifname].forEach(function (nic) {
        if ('IPv4' !== nic.family || nic.internal !== false) {
          // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
          return;
        }

        var node = {
          name: ifname,
          address: nic.address
        };
          nics.push(node);
      });
    });
    return( nics );
  }
}

module.exports = OSInfo;
