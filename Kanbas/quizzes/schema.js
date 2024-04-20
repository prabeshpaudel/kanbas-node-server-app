import mongoose from "mongoose";
const quizzesSchema = new mongoose.Schema(
  {
    title: {
        type: String,
        required: true
      },
      description: {
        type: String,
      },
      course: {
        type: String,
        required: true,
      },
      quizType: {
        type: String,
        enum: ['Graded Quiz', 'Other Quiz Types']
      },
      points: {
        type: Number,
      },
      assignmentGroup: {
        type: String,
        enum: ['Quizzes', 'Assignments', 'Exams', 'Projects']
      },
      shuffleAnswers: Boolean,
      timeLimit: Number,
      multipleAttempts: Boolean,
      showCorrectAnswers: Boolean,
      accessCode: String,
      for: String,
      oneQuestionAtATime: Boolean,
      webcamRequired: Boolean,
      lockQuestionsAfterAnswering: Boolean,
      dueDate: Date,
      availableDate: Date,
      untilDate: Date,
      isPublished: Boolean,
      numberOfQuestions: Number,
      correctAnswersDate: Date,
      isTimeLimited: Boolean,
      questions: [
        {
         type: String,
        }
      ],
  },
  { collection: "quizzes" }
);
export default quizzesSchema;




