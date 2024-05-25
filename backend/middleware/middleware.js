const cors = require('cors');
const bodyParser = require('body-parser');

const middleware = (app) => {
  app.use(cors());
  app.use(bodyParser.json());
};

module.exports = middleware;
