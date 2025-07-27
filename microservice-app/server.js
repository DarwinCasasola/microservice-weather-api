require("dotenv").config();
const express = require("express");
const app = express();
const weatherRoutes = require("./routes/weatherRoutes");

app.use("/api/weather", weatherRoutes);

const PORT = process.env.PORT || 8083;
app.listen(PORT, () => console.log(` Weather server running at http://localhost:${PORT}`));
