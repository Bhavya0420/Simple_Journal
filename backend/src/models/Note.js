import mongoose from "mongoose";

//1 - You need to create a schema
//2 - You would create a model based of that schema

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    { 
        timestamps: true
    } //createdAt, updatedAt fields
);

const Note=mongoose.model("Note", noteSchema)

export default Note