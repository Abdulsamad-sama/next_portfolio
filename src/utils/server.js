import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(process.env.ATLAS);
  } catch (error) {
    throw new Error(`Connection failed: ${error?.message || error.toString()}`);
  }
};
