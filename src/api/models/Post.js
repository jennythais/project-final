import { model, Schema } from "mongoose";
import { AppTypes } from "../../types";
const postSchema =
  new Schema() <
  AppTypes.Post >
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    desc: { type: String, required: true },
    status: { type: Boolean, default: true },
    startTime: { type: String, required: true },
    startDate: { type: String, required: true },
    endTime: { type: String, required: true },
    endDate: { type: String, required: true },
    point: { type: Number, required: true },
    location: { type: String, required: true },
    numberParticipants: { type: Number, default: 0 },
    facultyName: { type: String, required: true },
    category: { type: String, required: true },
    stdJoin: [{ type: String, ref: "Student" }],
    testId: { type: String, required: false },
  };
const Post = model < AppTypes.Post > ("Post", postSchema);
export default Post;
