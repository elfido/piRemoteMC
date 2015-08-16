var osinfo = require("./lib/os.js"),
    config = require("./config.json"),
    Client = require('node-rest-client').Client,
    client = new Client();

App = {
  sendConfig: function(){
    var data = {
        client: config.clientName
    };

    var req = client.post(config.server, data, function(data, response){
      console.log("So far so good");
    });

    req.on("error", function(){
      console.log("oops",config.server);
    });
  },
  init: function(){
    this.sendConfig();
    setInterval(this.sendConfig.bind(this), config.notifications);
  }
}

App.init();
