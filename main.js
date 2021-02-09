const express = require("express");
const app = express();


app.get('/api', (_, res) => {
    return res.sendStatus(200).end();
})


app.listen(3000, () => {
    console.log(`server started at port 3000....`);
})



