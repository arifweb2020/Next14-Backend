import mongoose from "mongoose";

export const connectToDB = async () => {
  const connection:any = {};

  try {
    if (connection.isConnected) return;
    const mongoURI:any = process.env.MONGO;
    const db = await mongoose.connect(mongoURI);
    connection.isConnected = db.connections[0].readyState;
  } catch (error:any) {
    console.log(error)
    throw new Error(error);
  }
};