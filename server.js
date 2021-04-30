const express = require("express");
const app = express();
const connecDB = require("./config/connectDB");
const userRouter = require("./routes/user");

app.use(express.json());
connecDB();
app.use("/api/users", userRouter);

const port = 8080;
app.listen(port, () => {
  console.log("server running in port: " + port);
});
