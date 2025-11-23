import mongoose from "mongoose";
import { Schema } from "mongoose";
import { type } from "os";

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
    cat: {
      type: String,
      required: false,
    },
    img: {
      type: String,
      required: false,
    },
    video: {
      type: String,
      required: false,
    },
    link: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);
const Portfolio =
  mongoose.models.Portfolio || mongoose.model("portfolio", portfolioSchema);
export default Portfolio;
