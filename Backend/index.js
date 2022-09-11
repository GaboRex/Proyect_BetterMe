const express = require('express');
const routes = require('./src/routes');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use('/api', routes);

app.listen(5000, () => {
    
    console.log('Betterme server started on port 5000');
});
