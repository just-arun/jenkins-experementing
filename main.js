const express = require("express");
const app = express();


app.get('/api', (_, res) => {
    return res.json({
        status: 200,
        data: {
            process: "ok"
        }
    }).end();
})


app.listen(3000, () => {
    console.log(`server started at port 3000....`);
})



