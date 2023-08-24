import connection from './persistence/connection.js';
import croqueteDao from './persistence/croquete-dao.js';
import { Croquete } from './models/Croquete.js';

await connection.start();

let croqueteteste1 = new Croquete({
  restaurant: "Teste2",
  author: "Mari",
  comment: "O teste2 estava óptimo",
  date: { type: Date, default: Date.now }
})

let croqueteteste2 = new Croquete({
  restaurant: "Teste3",
  author: "Gui",
  comment: "O teste3 estava óptimo",
  date: { type: Date, default: Date.now }
})

let persisted1 = await croqueteDao.create(croqueteteste1);
console.log(`persisted: ${persisted1}`);

let persisted2 = await croqueteDao.create(croqueteteste2);
console.log(`persisted: ${persisted2}`);
connection.end();