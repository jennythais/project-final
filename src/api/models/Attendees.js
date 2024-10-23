import { Schema } from "mongoose";
import { AppTypes } from "@/types";
const AttendeeChildSchema =
  new Schema() <
  AppTypes.AttendeeChild >
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    postResult: {
      type: mongoose.Schema.Types.Mixed,
      default: null,
    },
  };
const AttendeesSchema =
  new Schema() <
  AppTypes.Attendees >
  {
    postId: {
      type: String,
      required: true,
      unique: true,
    },
    attendees: {
      type: [AttendeeChildSchema],
      required: true,
    },
  };
const Attendees = model < AppTypes.Attendees > ("Attendees", AttendeesSchema);
export default Attendees;