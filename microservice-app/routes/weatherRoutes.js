const express = require("express");
const router = express.Router();
const weatherController = require("../controllers/weatherController");

// Optional homepage for /api/weather
router.get("/", (_req, res) => {
    res.send("🌦️ Welcome to the Weather API. Use /api/weather?city=YourCity");
});

// Route with query param: /api/weather?city=Miami
router.get("/search", weatherController.getWeatherByCity);

// Route with dynamic param: /api/weather/Miami
router.get("/:city", weatherController.getWeatherByCity);

module.exports = router;
