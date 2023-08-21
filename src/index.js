import connection from './persistence/connection.js';

connection.ping().catch(console.dir);
