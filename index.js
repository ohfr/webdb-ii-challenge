const express = require("express");

const carRouter = require("./Routes/Car-Routes");

const server = express();

const PORT = process.env.PORT || 8000;

server.use(express.json());


server.use("/cars", carRouter);

server.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({message: "Something went wrong"})
});

server.listen(PORT, () => {
    console.log(`\n *** Server running on port:${PORT}***\n`)
});
