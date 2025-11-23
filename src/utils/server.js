import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(process.env.ATLAS_URI);
    console.log("Database connected successfully");
  } catch (error) {
    throw new Error(`Connection failed: ${error?.message || error.toString()}`);
  }
};
