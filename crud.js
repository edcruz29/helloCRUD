const express = require("express");
const app = express();
app.use(express.json());

const port = 3000;

const usuariosEduardo = {
  id: 0,
  nome: "Eduardo",
  idade: 31,
};

const usuarios = [usuariosEduardo];

app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

app.post('/usuarios', (req,res) =>{
    const{nome, idade} = req.body;
    const id = usuarios.length;

    const novoUsuario = {
        id,
        nome,
        idade
    };

    usuarios.push(novoUsuario)
    res.json(novoUsuario);
})

app.listen(port, () =>{
 console.log(`Server is up and running on port ${port}`)});
