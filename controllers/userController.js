var express = require("express");
var UserSchema = require("../models/user");
var router = express.Router();
const jwt = require("jsonwebtoken");

class User {
  //construtor da função
  constructor() {}

  //função de registro de usuario
  async registerUser(req, res, next) {
    var newUser = new UserSchema({
      name: req.body.name,
      email: req.body.email,
      cpf: req.body.cpf,
      username: req.body.username,
      password: req.body.password,
    });
    newUser.save(function (err) {
      if (err) {
        res.status(500).json({ error: "Erro ao registrar Usuário!" });
        res.end();
        return;
      }
      res.json(newUser);
      res.end();
    });
  }

  //função de atualização de usuario
  async updateUser(req, res, next) {
    UserSchema.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { upsert: true },
      function (err, doc) {
        if (err) {
          res.status(500).json({ error: "Erro ao atualizar usuário" });
          res.end();
          return;
        }
        res.json(req.body);
        res.end();
      }
    );
  }

  //função de consulta de um usuario
  async getUser(req, res, next) {
    const user = await UserSchema.findOne({ _id: req.params.id });
    if (!user) {
      return res.status(400).json({ message: "Usuário não encontrado!" });
    }
    return res.json(user);
  }

  //função de consulta de usuarios
  async getUsers(req, res, next) {
    const { searchText, page } = req.query;
    const skip = page ? Number(page) * 10 : 0;
    const users = await UserSchema.aggregate([
      {
        $match: {
          $or: [
            {
              email: new RegExp(searchText || "", "i"),
            },
            {
              name: new RegExp(searchText || "", "i"),
            },
          ],
        },
      },
      {
        $sort: {
          name: 1,
        },
      },
      {
        $skip: skip,
      },
      {
        $limit: 10,
      },
    ]);
    const totalUsers = await UserSchema.aggregate([
      {
        $match: {
          $or: [
            {
              email: new RegExp(searchText || "", "i"),
            },
            {
              name: new RegExp(searchText || "", "i"),
            },
          ],
        },
      },
      {
        $count: "totalUsers",
      },
    ]);
    if (!users) {
      return res.status(400).json({ message: "Usuário não encontrado!" });
    }
    return res.json({ users, total: totalUsers[0].totalUsers });
  }

  //função de exclusão de usuario
  async deleteUser(req, res, next) {
    User.findOneAndDelete({ _id: req.params.id }).remove(function (err) {
      if (err) {
        res.status(500).json({ error: "Erro ao deletar usuário" });
        res.end();
        return;
      }
      res.json("Usuário deletado com sucesso");
      res.end();
    });
  }
}

module.exports = User;
