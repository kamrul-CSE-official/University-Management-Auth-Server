import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function boostrap() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log(`👏 Database connected successfully.`);

    app.listen(config.port, () => {
      console.log(`Application running on `, config.port);
    });
  } catch (error) {
    console.log("Failed to connect data,", error);
  }
}
boostrap();
