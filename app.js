import mongoose from 'mongoose';
import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';

import testAlumnos from './backend/controllers/alumnos.controllers.js';
import testDirector from './backend/controllers/director.controllers.js';
import testJefecarre from './backend/controllers/jefecarre.controllers.js';
import testLimpieza from './backend/controllers/limpieza.controllers.js';
import testMaestros from './backend/controllers/maestros.controllers.js';
import testRector from './backend/controllers/rector.controllers.js';

dotenv.config();
mongoose.connect(process.env.MONGODB_URI)

.then(() => {
    console.log("Conexión a MongoDB exitosa");
})
.catch((err) => {
    console.error("Error al conectar con MongoDB:", err);
});

const app = express();
app.use(cors());

app.listen(4000, () => {
    console.log("Servidor funcionando en el puerto 4000");
});

testAlumnos();
testDirector();
testJefecarre();
testLimpieza();
testMaestros();
testRector();