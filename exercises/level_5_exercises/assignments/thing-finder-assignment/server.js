const express =  require('express');
const app = express();


app.use(express.json())

app.use("/inventory", require("./routes/inventoryItems.js"))

app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})