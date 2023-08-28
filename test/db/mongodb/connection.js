import connection from "../../../src/db/mongodb/connection.js";
import mongoose from 'mongoose';
import 'dotenv/config';
import {expect} from "chai";

//mongoose connection readyStates
const readyStates = {
    disconnected: 0,
    connected: 1,
    connecting: 2,
    disconnecting: 3
}; 

let state = mongoose.connection.readyState;

describe('before connecting', () => {

    it('should be disconnected', () => {
        expect(state).to.equal(readyStates.disconnected);
    });

});

describe('connecting to test db', () => {

    it('should connect to db succefully', async () => {
        await connection.start();
        state = mongoose.connection.readyState;
        expect(state).to.equal(readyStates.connected);

    });

    it('should connect to test db', async () => {
        expect(mongoose.connection.name).to.equal(process.env.DB_TEST);
    });

  
    it('should disconnect to test db succefully', async () => {
        await connection.end();
        state = mongoose.connection.readyState;
        expect(state).to.equal(readyStates.disconnected);
    });
  
});