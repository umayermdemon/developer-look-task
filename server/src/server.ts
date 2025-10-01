import mongoose from "mongoose";
import { Server } from "http";
import app from "./app";
import config from "./app/config";

const port = 3000;
let server: Server;
async function main() {
  try {
    await mongoose.connect(config.mongoURI as string);
    server = app.listen(port);
    console.log(`Server is running on http://localhost:${port}`);
  } catch (error) {
    console.error("Error starting server:", error);
  }
}

main();
