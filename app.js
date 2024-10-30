const express = require('express')
const app = express()
const host = 'http://127.0.0.1'
const port = 3000


app.listen(port, () => {
    console.log(`Example app listening on ${host}:${port}`)
})

app.get('/', (req, res) => {
    res.send('<h1>Benvenuto nel mio blog!</h1>');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
