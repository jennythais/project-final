import { Schema } from "mongoose";
import { AppTypes } from "@/types";


const pointDetailSchema =
  new Schema() <
  AppTypes.PointDetail >
  {
    name: { type: String, required: true },
    point: { type: Number, required: true },
  };
const pointCategorySchema =
  new Schema() <
  AppTypes.PointCategory >
  {
    studentId: { type: String, required: true, unique: true },
    academic: [{ type: String, required: true }],
    volunteer: [{ type: String, required: true }],
    mentalPhysical: [{ type: String, required: true }],
    discipline: {
      type: [pointDetailSchema],
      default: [
        {
          name: "Không vi phạm",
          point: 20,
        },
      ],
    },
    reward: [pointDetailSchema],
    pioneering: [pointDetailSchema],
  };
const PointCategory =
  model < AppTypes.PointCategory > ("PointCategory", pointCategorySchema);
export default PointCategory;
