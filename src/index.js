import app from "./app.js";
import { config } from "dotenv";
config();
const PORT = process.env.NODE_LOCAL_PORT || 3000;
app.listen(PORT);
console.log("Server on port", PORT);
