const jsonServer = require ("json-server"); // IMPORTANDO LIBRERIA JSON-SERVER.
const server = jsonServer.create ();
const router = jsonServer.router ("db.json");
const middlewares = jsonServer.defaults ();
const port = process.env.PORT || 3001; // Aca puedes usar cualquier numero de puerto. Elegimos usar el puerto 3001 para evitar posibles conflictos.

server.use (middlewares);
server.use (router);
server.listen (port);
