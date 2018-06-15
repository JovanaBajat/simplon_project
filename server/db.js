const Client = require('pg').Client;

const client = new Client({
    host: 'localhost',
    port: '5433',
    database: 'mereo',
    user: 'postgres',
    password: 'admin'
});

(async () => {
    await client.connect()
})();

module.exports = client;
