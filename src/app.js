import express, {json} from "express";
import index from "./routes/index.js";
import db from "./config/dbConnect.js";
import projetos from "./routes/projeto.js";
import chalk from "chalk";
const app = express();

app.use(json());
app.use("/", index);
app.use("/projetos",projetos);

db.on("error",console.log.bind(console,"Erro de conecxão"));
db.once("open", () => {
    console.log(
        chalk.white.bgRgb(255,0,127).bold("Conecxão com o banco feita com sucesso")
    
    );
});

export default app;