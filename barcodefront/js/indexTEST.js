const client = new StompJs.Client({
    brokerURL: 'ws://localhost:8080/websocket',
    debug: function (str) {
      console.log(str);
    },
    reconnectDelay: 5000
  });
  
  client.onConnect = function (frame) {
    console.log("CONNECTED! :D")
  };
  
  client.onStompError = function (frame) {
    console.log("CONNECTION ERROR");
  };
  
  client.activate();