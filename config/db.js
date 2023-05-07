const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
    console.info(`Connected to database on Worker process: ${process.pid}`);
  } catch (error) {
    console.error(
      `Connection error: ${error.stack} on Worker process: ${process.pid}`
    );
    process.exit(1);
  }
};

module.exports = connectDb;
