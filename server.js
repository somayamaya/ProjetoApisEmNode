const app = require('./src/app');
const PORT = 3030;

app.listen(PORT, () => {
    console.log(`Servidorzinho maravilhoso rodando em http://localhost:${PORT}`)
});
