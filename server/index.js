//*IMPORTS*/
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

//** FILES CONFIG */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* CONFIG */
const app = express();

const PORT = 3001;

app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`);
})