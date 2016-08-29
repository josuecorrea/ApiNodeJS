var app = require('../app.js');

app.set('port', process.env.PORT || 8088);

var server = app.listen(app.get('port'), function(){
    console.log('Servidor rodando: ' + server.address().port);
});
