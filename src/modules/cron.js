const cron = require("node-cron");
const axios = require("axios");
require("dotenv").config();

const task = cron.schedule("* * * * *", async () => {
  try {
    const response = await axios.post(process.env.WEBHOOK_URI);
    console.log(`POST request sent: ${response.data}`);
  } catch (error) {
    console.error(error);
  }
});

module.exports = task;
