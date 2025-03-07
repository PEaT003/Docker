// index.js
const express = require('express');
const app = express();
const PORT = 3099;

app.get('/patiwed', (req, res) => {
    res.send('Patiwed Chumjan 6604305001344 <br> Worawit Srichai 6604305001348</br>');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
});
