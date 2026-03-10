 import mongoose from "mongoose";

const dbconfig = {
  url: "mongodb://localhost:27017/tasks-office",
};

export const connectDB = async () => {
  try {
    await mongoose.connect(dbconfig.url, {
    });
    console.log("Connected to MongoDB successfully!");      
  }
  catch (error) { 
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); 
  }
};
