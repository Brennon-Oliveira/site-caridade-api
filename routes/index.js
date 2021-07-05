var express = require("express");
var router = express.Router();

const User = require("../controllers/userController.js");

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});

//cadastrar um usuário
router.post("/usuario/cadastro", async (req, res, next) => {
  var usuario = new User();
  await usuario.registerUser(req, res, next);
});

//retorna todos os usuários
router.get("/usuarios", async (req, res, next) => {
  var user = new User();
  await user.getUsers(req, res, next);
});

//retorna um usuário
router.get("/usuario/:id", async (req, res, next) => {
  var user = new User();
  await user.getUser(req, res, next);
});

//Atualização de usuários
router.put("/usuario/:id", async (req, res, next) => {
  var user = new User();
  await user.updateUser(req, res, next);
});

//Delete de usuário
router.delete("/usuario/:id", async (req, res, next) => {
  var user = new User();
  await user.deleteUser(req, res, next);
});

module.exports = router;
