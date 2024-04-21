import QuestionModel from "./model.js";
import {findQuizById, updateQuiz} from "../quizzes/dao.js";
export const findQuestionsByQuizId = (quizId) => QuestionModel.find({ quizId });

export const findQuestionById = (questionId) => QuestionModel.findById(questionId);

export const updateQuestion = (questionId, question) => {
  return QuestionModel.updateOne({ _id: questionId }, { $set: question });
};

export const createQuestion = (question) => {
  delete question._id;
  return QuestionModel.create(question);
};

export const deleteQuestion = (questionId) => {
  return QuestionModel.deleteOne({ _id: questionId });
};


