import { AppTypes } from "@/types";
import { model, Schema } from "mongoose";

const AssitantSchema =
  new Schema() <
  AppTypes.Assistant >
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    facultyName: { type: String, required: true },
  };
const Assistant = model < AppTypes.Assistant > ("Assistant", AssitantSchema);
export default Assistant;
