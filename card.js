#!/usr/bin/env node
// Usado para dizer ao Node.js que se trata de uma ferramenta do CLI

// Declarando os módulos:
const chalk = require("chalk");
const boxen = require("boxen");

// Definindo as opções para o ‘boxen’:
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
};

// Inclusão do Text e mais as definições do ‘chalk’:
const data = {
  name: chalk.white("Diogo Almeida/"),
  handle: chalk.cyan("diogoX451"),
  github: chalk.cyan("https://github.com/diogoX451"),
  linkedin: chalk.cyan("https://www.linkedin.com/in/diogo-almeida-3973541b1/"),
  instagram: chalk.white("https://www.instagram.com/xs.diogo/"),
  npx: chalk.white("npx diogox451"),

  labelGitHub: chalk.white.bold("    GitHub:"),
  labelLinkedIn: chalk.white.bold("  LinkedIn:"),
  labelInstagram: chalk.white.bold("      Instagram:"),
  labelCard: chalk.white.bold("      Card:"),
};

// Aqui será a saída do nosso Cartão Pessoal em NPX:
const newline = "\n";
const heading = `${data.name} ${data.handle}`;

const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const instagraming = `${data.labelInstagram} ${data.instagram}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Aqui devemos colocar toda a nossa saída numa única variável para que possamos usar
// o ‘boxen de maneira efetiva:
const output =
  heading +
  newline +
  newline +
  githubing +
  newline +
  linkedining +
  instagraming +
  newline +
  newline +
  carding;

console.log(chalk.green(boxen(output, options)));
