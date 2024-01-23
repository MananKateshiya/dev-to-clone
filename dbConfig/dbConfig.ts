import mongoose from "mongoose";
export async function connect() {
  try {
    mongoose.connect(`${process.env.DATABASE_URL!}`);
    const connection = mongoose.connection;
    connection.on('connected',()=>{
        console.log("DATABASE IS CONNECTED")
    })
    connection.on('error',(err)=>{
        console.log("MongoDB Connection Error  "+ err)
        process.exit();
    })
  } catch (error) {
    console.log("Something gone wrong!");
    console.log(error);
  }
}
