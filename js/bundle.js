"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var user = function user(username, password) {
  _classCallCheck(this, user);

  this.usuario = username;
  this.senha = password;
};

var btnCreate = document.getElementById('');
var criausuario = document.getElementById("cadastroUsuario");
var criasenha = document.getElementById("cadastroSenha");

function logar(criausuario, criasenha) {
  var dadosdeacesso = new Object(),
      novousuario = criausuario.value,
      novasenha = criasenha.value;
  return dadosdeacesso;
}
