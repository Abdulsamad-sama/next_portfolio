import mongoose from "mongoose";
import { Schema } from "mongoose";

const portfolioSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);
const Portfolio =
  mongoose.models.Portfolio || mongoose.model("portfolio", portfolioSchema);
export default Portfolio;
