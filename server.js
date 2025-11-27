const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const devRoutes = require('./routes/developers');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

app.use('/developers', devRoutes);

app.get('/', (req, res) => res.send('Developers API running'));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));