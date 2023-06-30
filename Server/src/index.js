const server = require('./app');
const {conn} = require('./DB_connections.js');
const PORT = 3001;




server.listen(PORT, () => {
    conn.sync({ force: true });
    console.log('Server raised in port: ' + PORT);
});

