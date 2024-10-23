import { Schema } from "mongoose";
import { AppTypes } from "@/types";

const optionSchema =
  new Schema() <
  AppTypes.Options >
  {
    id: { type: String, required: true },
    text: { type: String, required: true },
  };
const questionSchema =
  new Schema() <
  AppTypes.Question >
  {
    question: { type: String, required: true },
    correctOption: { type: String, required: true },
    options: [optionSchema],
  };
const testSchema =
  new Schema() <
  AppTypes.Test >
  {
    testId: { type: String, required: true, unique: true },
    questions: [questionSchema],
    target: { type: Number, required: true },
  };

const Test = model < AppTypes.Test > ("Test", testSchema);
export default Test;
