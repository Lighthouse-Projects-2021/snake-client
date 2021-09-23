const net = require("net");
const { IP, PORT } = require("./constants");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Successfully connected to game server")
  })
  //player's name
  conn.on("connect", () => {
    console.log("connected to server")
    conn.write("Name: KCB");
    conn.write("Say: Finally!!");
  })

  // code that does something when the connection is first established
  conn.on("data", (info) => {
    console.log("Data received!")
    console.log(info)

  });
  return conn;
};



module.exports = { connect };