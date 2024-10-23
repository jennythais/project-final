import { Schema } from "mongoose";
import PostSchema from "./Post";
import { AppTypes } from "@/types";


const expiredPostSchema =
  new Schema() <
  AppTypes.ExpiredPost >
  {
    postFields: { type: PostSchema, required: true },
    expiredAt: { type: Date, default: Date.now },
  };
const ExpiredPost =
  model < AppTypes.ExpiredPost > ("ExpiredPost", expiredPostSchema);
export default ExpiredPost;
