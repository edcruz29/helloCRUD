const express = require("express");
const app = express();
app.use(express.json());

const port = 3000;

const usuariosEduardo = {
  id: 1,
  nome: "Eduardo",
  idade: 31,
};

const usuarios = [usuariosEduardo];

app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

app.listen(port, () => console.log(`Server is up and running on port ${port}`));
