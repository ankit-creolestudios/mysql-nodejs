const app = require("./server/server.js");
const dotenv = require("dotenv");
dotenv.config();
app.listen(process.env.PORT, () => {
  console.log(`server listen port ${process.env.PORT}`);
});
