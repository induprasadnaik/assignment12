const express = require("express");
const app = express();

const productRoutes = require('./routes/productRoutes')


app.use(express.json());

app.use('/inventory',productRoutes);


const port = 4000;
app.listen(port,()=>{
    console.log(`server is running  on port ${port}`)
});