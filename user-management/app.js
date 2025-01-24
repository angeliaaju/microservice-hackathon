const express = require('express');
const app = express();
const port = 4000;

app.get('/users', (req, res) => {
    res.send([{ id: 1, name: 'John Doe' }]);
});

app.listen(port, () => {
    console.log(`User Management running on port ${port}`);
});