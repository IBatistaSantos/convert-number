const express = require('express');
const  routes  = require('./routes');
const swaggerUi = require('swagger-ui-express');

const swaggerDocument = require('../swagger-document.json');
const app = express();


app.use(
    '/docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
  );
app.use(express.json());
app.use(routes)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
