const app = require('./src/config/custom-express');

app.listen( process.env.PORT || 3000, function() {
    console.log(`Servidor rodando na porta 3000`);
});
