import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  const findAllCourses = async (req, res) => {
    const courses = await dao.findAllCourses();
    res.json(courses);
  }

  const createCourse = async (req, res) => {
    const course = await dao.createCourse(req.body);
    res.json(course);
  }

  const findCourseById = async (req, res) => {
    const course = await dao.findCourseById(req.params.id);
    res.json(course);
  }

  const updateCourse = async (req, res) => {
    const { id } = req.params;
    const status = await dao.updateCourse(id, req.body);
    res.json(status);
  }

  const deleteCourse = async (req, res) => {
    const { id } = req.params;
    const status = await dao.deleteCourse(id);
    res.json(status);
  }

  app.get("/api/courses", findAllCourses);
  app.post("/api/courses", createCourse);
  app.get("/api/courses/:id", findCourseById);
  app.put("/api/courses/:id", updateCourse);
  app.delete("/api/courses/:id", deleteCourse);

}

// import Database from "../Database/index.js";
// export default function CourseRoutes(app) {
//   app.get("/api/courses", (req, res) => {
//     const courses = Database.courses;
//     res.send(courses);
//   });
//   app.post("/api/courses", (req, res) => {
//     const course = { ...req.body,
//       _id: new Date().getTime().toString() };
//     Database.courses.push(course);
//     res.send(course);
//   });
//   app.get("/api/courses/:id", (req, res) => {
//     const { id } = req.params;
//     const course = Database.courses
//       .find((c) => c._id === id);
//     if (!course) {
//       res.status(404).send("Course not found");
//       return;
//     }
//     res.send(course);
//   });
//   app.put("/api/courses/:id", (req, res) => {
//     const { id } = req.params;
//     const course = req.body;
//     Database.courses = Database.courses.map((c) =>
//       c._id === id ? { ...c, ...course } : c
//     );
//     res.sendStatus(204);
//   });
//   app.delete("/api/courses/:id", (req, res) => {
//     const { id } = req.params;
//     Database.courses = Database.courses
//       .filter((c) => c._id !== id);
//     res.sendStatus(204);
//   });

// }
