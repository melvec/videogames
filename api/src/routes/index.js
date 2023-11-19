const { Router } = require('express');
const gamesRouter = require('./gamesRouter');
const genresRouter = require('./genresRouter');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use("/videogames", gamesRouter );
router.use("/genres", genresRouter );


module.exports = router;
