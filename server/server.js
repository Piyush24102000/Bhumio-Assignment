const express = require('express');
const { getData, getIssues } = require('./Logic/operation');
const app = express()
const cors = require('cors');

/* ----Middlewares---- */
app.use(cors());
app.use(express.json())

/* ----Routes---- */
app.get('/getAssignee', async (req, res) => {
    try {
        const response = await getData()
        return res.status(200).json({ status: true, message: response });
    } catch (error) {
        return res.status(500).json({ status: false, message: error.message });
    }
});

app.get('/getIssues', async (req, res) => {
    try {
        const response = await getIssues()
        return res.status(200).json({ status: true, message: response })
    } catch (error) {
        return res.status(500).json({ status: false, message: error.message });
    }
})

/* Server */
app.listen(5000, (console.log("Server Running on Port 5000")))