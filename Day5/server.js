require("dotenv").config();
// console.log(process.env.MONGO_URI);
const app=require('./src/app');
const connectTodb=require('./src/config/database')

connectTodb(); 
app.listen(3000,()=>{
    console.log("server is running on the port 3000")
})