// import * as dao from "./dao.js";

// export default function CourseRoutes(app) {
//   app.get("/api/courses", async (req, res) => {
//     const courses = await dao.findAllCourses();
//     res.json(courses);
//   });
//   app.post("/api/courses", async (req, res) => {
//     const course = await dao.createCourse(req.body);
//     res.json(course);
//   });
//   app.get("/api/courses/:id", async (req, res) => {
//     const { id } = req.params;
//     const course = await dao.findCourseById(id);
//     if (!course) {
//       res.status(404).send("Course not found");
//       return;
//     }
//     res.json(course);
//   });
//   app.put("/api/courses/:id", async (req, res) => {
//     const { id } = req.params;
//     const status = await dao.updateCourse(id, req.body);
//     res.json(status);
//   });
//   app.delete("/api/courses/:id", async (req, res) => {
//     const { id } = req.params;
//     const status = await dao.deleteCourse(id);
//     res.json(status);
//   });
// }

import Database from "../Database/index.js";
export default function CourseRoutes(app) {
  app.get("/api/courses", (req, res) => {
    const courses = Database.courses;
    res.send(courses);
  });
  app.post("/api/courses", (req, res) => {
    const course = { ...req.body,
      _id: new Date().getTime().toString() };
    Database.courses.push(course);
    res.send(course);
  });
  app.get("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    const course = Database.courses
      .find((c) => c._id === id);
    if (!course) {
      res.status(404).send("Course not found");
      return;
    }
    res.send(course);
  });
  app.put("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    const course = req.body;
    Database.courses = Database.courses.map((c) =>
      c._id === id ? { ...c, ...course } : c
    );
    res.sendStatus(204);
  });
  app.delete("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    Database.courses = Database.courses
      .filter((c) => c._id !== id);
    res.sendStatus(204);
  });

}
