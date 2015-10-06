 var soap = require('soap');
  var url = 'http://infovalutar.ro/curs.asmx?wsdl';
  var args = {name: 'value'};
  soap.createClient(url, function(err, client) {
      client.Curs.CursSoap.getlatestvalue(USD, function(err, result) {
          console.log(result);
      });
  });