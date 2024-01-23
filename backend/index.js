import app from "./app.js";
import { connectDB } from "./db/connectDB.js";
const PORT = 8000;

app.get("/", (req, res) => {
    res.json("Hello World!");
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    connectDB();
});