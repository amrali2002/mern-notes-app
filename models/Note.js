import mongoose from "mongoose";


const noteSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: {true, "plea se provide a user id"},
    },
    title: {
        type: String,
        required: true,
    
    },
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    color : {
        type: String,
        default: "#ffffff",
    },
 
});

export default mongoose.model("Note", noteSchema);