const server = require("./app.js");
const PORT = process.env.PORT || 3001;
const HOSTNAME = "localhost";

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running on ${HOSTNAME}:${PORT}`);
});
