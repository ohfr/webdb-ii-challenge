

const express = require("express");

const router = express.Router();

const db = require("../Utils/dbConfig");

router.get("/", async (req, res, next) => {
    try {
        res.json(await db("car-dealer").select());
    } catch(err) {
        next(err);
    };
});

router.get("/:id", async (req, res, next) => {
    try {
        res.json(await db("car-dealer").where("id", req.params.id).first());
    } catch (err) {
        next(err);
    };
});

router.post("/", async (req, res, next) => {

    try {
        const payload = {
            VIN: req.body.VIN,
            make: req.body.make,
            model: req.body.model,
            mileage: req.body.mileage,
            transmission: req.body.transmission,
            title: req.body.title
        };
        const [id] = await db("car-dealer").insert(payload);
        const newCar = await db("car-dealer").where("id", id).first();

        res.json(newCar);
    } catch (err) {
        next(err);
    };
});

router.put("/:id", async (req, res, next) => {
    try {
        const payload = {
            VIN: req.body.VIN,
            make: req.body.make,
            model: req.body.model,
            mileage: req.body.mileage,
            transmission: req.body.transmission,
            title: req.body.title
        };

        await db("car-dealer").where("id", req.params.id).update(payload);

        const newCar = await db("car-dealer").where("id", req.params.id).first();

        res.json(newCar);

    } catch (err) {
        next(err);
    };
});

router.delete("/:id", async (req, res, next) => {
    try {
        res.json(await db("car-dealer").where("id", req.params.id).del());
    } catch (err) {
        next(err);
    };
});

module.exports = router;