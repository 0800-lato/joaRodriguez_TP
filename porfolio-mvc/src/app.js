const express = require("express");
const path = require("path");
const PORT = 3000;
const indexRoutes = require('./routes/index.routes')
const app = express();

app.use(express.static(path.join(__dirname, '..','public')))

app.use('/',indexRoutes)
app.use('/about',indexRoutes)


app.listen(PORT, () => console.log(`Server Running in http://localhost:${PORT}`));