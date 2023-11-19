const { Router } = require('express');
const { getGamesHandler, getDetailHandler, createGameHandler } = require("../handlers/gamesHandler");


const gamesRouter = Router();

// body --> info
gamesRouter.post("/", createGameHandler);
gamesRouter.get("/", getGamesHandler);

// : id --> params
gamesRouter.get("/:idVideogame", getDetailHandler);

module.exports = gamesRouter;