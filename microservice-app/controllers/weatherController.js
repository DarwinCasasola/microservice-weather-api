const axios = require("axios");

exports.getWeatherByCity = async (req, res) => {
    const city = req.params.city || req.query.city;
    const apiKey = process.env.OPENWEATHER_API_KEY;

    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params: {
                q: city,
                appid: apiKey,
                units: "metric"
            }
        });

        res.json({
            city: response.data.name,
            temperature: response.data.main.temp + "°C",
            description: response.data.weather[0].description
        });
    } catch (err) {
        res.status(500).json({
            error: "Failed to fetch weather",
            details: err.response?.data?.message || err.message
        });
    }
};
