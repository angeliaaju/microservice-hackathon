const express = require('express');
const app = express();
const port = 5000;

app.get('/data', (req, res) => {
    res.send([{ id: 1, content: 'Sample Data' }]);
});

app.listen(port, () => {
    console.log(`Data Storage running on port ${port}`);
});