import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
    _id: String,
    title: String,
    description: String,
    points: Number,
    due_date: Date,
    available_date: Date,
},
    { collection: "assignment" }
);
export default assignmentSchema;