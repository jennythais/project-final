import { model, Schema } from "mongoose";
import { AppTypes } from "../../types";

const studentSchema =
  new Schema() <
  AppTypes.Student >
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    activities: [{ type: String, required: true }],
    password: { type: String, required: true },
    activities: [{ type: String }],
    facultyName: { type: String, required: true },
    trainingPoint: { type: Number, required: true },
    role: { type: String, require: true },
    position: { type: String, require: true },
  };

const Student = model < AppTypes.Student > ("Student", studentSchema);
export default Student;
