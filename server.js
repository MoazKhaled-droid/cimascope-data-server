const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();

const router = jsonServer.router('db.json'); 
const middlewares = jsonServer.defaults();

const corsOptions = {
  origin: [
    'https://cimascope.vercel.app', 
    'http://localhost:5173'        
  ],
  optionsSuccessStatus: 200
};

server.use(cors(corsOptions));

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});