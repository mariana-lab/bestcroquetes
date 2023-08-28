import connection from "../../../../src/db/mongodb/connection.js";
import { Croquete } from "../../../../src/models/croquete.js";
import croqueteDao from "../../../../src/db/mongodb/schema/croquete.dao.js";
import { expect } from "chai";

let croqueteZero = {};

describe("croquete operations to the db", function() {
    before(async function () {
        await connection.start();
        await connection.getCollection('croquetes').drop();
        croqueteZero = new Croquete({
            restaurant: "restaurant",
            author: "author zero",
            comment: "comment zero"
          })

        croqueteZero = await croqueteDao.create(croqueteZero);
    });

    after(async function () {
        await connection.end();
    });

    it("should return a croquete by _id", async function () {

        let result = await croqueteDao.findById(croqueteZero._id);
        expect(result.author).to.eq(croqueteZero.author);
    });
    
    it("should create a new croquete", async function () {

        let croqueteOne = new Croquete({
            restaurant: "restaurant",
            author: "author one",
            comment: "comment one"
          })

        croqueteOne = await croqueteDao.create(croqueteOne);
        let result = await croqueteDao.findById(croqueteOne._id);

        expect(result.author).to.eq(croqueteOne.author);
    });

    it("shopuld return all croquetes", async function () {
        const croquetes = await croqueteDao.findAll();
        expect(croquetes.length).to.eq(2);
    });

    it("should return a group of croquetes by a key", async function () {
        let croquetes = await croqueteDao.findBy('restaurant', 'restaurant');
        expect(croquetes.length).to.eq(2);
    });
});
