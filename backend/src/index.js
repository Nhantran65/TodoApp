const app = require("./app");
const mongoose = require("mongoose");

require("dotenv").config();

const port = process.env.PORT || 5000;

app.listen(port, async () => {
  /* eslint-disable no-console */
  await mongoose.connect("mongodb+srv://tranhuynhdainhan25102004:Baochau2903@cluster0.qhp3ciw.mongodb.net/test");
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});
