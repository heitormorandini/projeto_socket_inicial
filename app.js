/* importar as configurações do servidor */
var app = require('./config/server');

/* parametrizar a porta de escuta */
var server = app.listen(999, function(){
	console.log('Servidor online');
})

// declaração de socket e inicio de conexão