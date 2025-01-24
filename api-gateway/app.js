const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/users', async (req, res) => {
    const response = await axios.get('http://user-management:4000/users');
    res.send(response.data);
});

app.listen(port, () => {
    console.log(`API Gateway running on port ${port}`);
});