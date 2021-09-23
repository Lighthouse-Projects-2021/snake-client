const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.223.133", // IP address here,
    port: 50542 // PORT number here,
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
  })

  // code that does something when the connection is first established
  conn.on("data", (info) => {
    console.log("Data received!")
    console.log(info)

  });
  return conn;
};



module.exports = { connect };