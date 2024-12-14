require("dotenv").config();

const app = require("./core/server");
const task = require("./modules/cron");

task.start();
app.listen(process.env.PORT || 3000, () => {
    console.log("Project started");
});
