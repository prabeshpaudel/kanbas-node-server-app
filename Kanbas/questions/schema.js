import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    questionTitle: {
      type: String,
      required: true,
    },
    quizId: {
      type: String,
      required: true,
    },
    questionType: {
      type: String,
      enum: ["Multiple Choice", "True/False", "Fill In the Blank"],
      required: true,
    },
    points: {
      type: Number,
      required: true,
    },
    questionText: String,
    choices: [
      {
        text: {
          type: String,
          // required: true,
        },
        isCorrect: {
          type: Boolean,
          default: false,
        },
      },
    ],
    trueFalseAnswer: Boolean,
    blanks: [String],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "questions" }
);

export default questionSchema;
