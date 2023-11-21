const { Router } = require('express');
const { getGenresHandler } = require("../handlers/genresHandler");

const genresRouter = Router();

genresRouter.get("/", getGenresHandler);
genresRouter.post("/", getGenresHandler);// for testing purposes

module.exports =  genresRouter
