import connection from './db/mongodb/connection.js';
import croqueteDao from './db/mongodb/schema/croquete.dao.js';
import { Croquete } from './models/croquete.js';

//start connection
//await for requests - express and controllers
//forward requests to services
//end connection