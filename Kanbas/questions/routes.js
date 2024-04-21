import * as dao from "./dao.js";

export default function QuestionRoutes(app) {
    app.get("/api/quizzes/:qid/questions", async (req, res) => {
        const { qid } = req.params;
        const questions = await dao.findQuestionsByQuizId(qid);
          res.send(questions);
      });

  app.get("/api/questions/:questionId", async (req, res) => {
    const { questionId } = req.params;
    const question = await dao.findQuestionById(questionId);
    if (!question) {
      res.status(404).send("Question not found");
      return;
    }
    res.send(question);
  });

  app.post("/api/quizzes/:qid/questions", async (req, res) => {
      const { qid } = req.params;
      const newQuestion = {
        ...req.body,
        quizId: qid,
      };
      const new_Question = await dao.createQuestion(newQuestion);
      console.log(new_Question);
      res.send(new_Question);
    });

  app.put("/api/questions/:questionId", async (req, res) => {
    const { questionId } = req.params;
      delete req.body._id;
    await dao.updateQuestion(questionId, req.body); 
    res.sendStatus(204);
  });


  app.delete("/api/questions/:questionId", async (req, res) => {
    const {questionId } = req.params;
    await dao.deleteQuestion(questionId);
    res.sendStatus(204);
  });
}