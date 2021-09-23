const { connect } = require('./client');

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }

  //Dpenendo da tecla apertada vamos enviar uma request para o servidor
  //para guiar a cobrinha 

  console.log("recebi " + key)
};

const stdin = setupInput()
stdin.on("data", handleUserInput);



