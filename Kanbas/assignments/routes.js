import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {

    const findAssignmentsByCourse = async (req, res) => {
        const { cid } = req.params;
        const assignments = await dao.findAssignmentsByCourse(cid);
        res.send(assignments);
    }

    const createAssignment = async (req, res) => {
        const { cid } = req.params;
        const newAssignment = {
            ...req.body,
            course: cid,
        };
        const assignment = await dao.createAssignment(newAssignment);
        res.send(assignment);
    }

    const deleteAssignment = async (req, res) => {
        const { aid } = req.params;
        console.log("Deleting assignment:", aid)
        await dao.deleteAssignment(aid);
        res.sendStatus(200);
    }

    const updateAssignment = async (req, res) => {
        const { aid } = req.params;
        await dao.updateAssignment(aid, req.body);
        res.sendStatus(204);
    }

    app.get("/api/courses/:cid/assignments", findAssignmentsByCourse);
    app.post("/api/courses/:cid/assignments", createAssignment);
    app.delete("/api/assignments/:aid", deleteAssignment);
    app.put("/api/assignments/:aid", updateAssignment);
}

// import db from "../Database/index.js";

// export default function AssignmentRoutes(app) {
//     app.get("/api/courses/:cid/assignments", (req, res) => {
//         const { cid } = req.params;
//         const assignments = db.assignments
//             .filter((a) => a.course === cid);
//         res.send(assignments);
//     });

//     app.post("/api/courses/:cid/assignments", (req, res) => {
//         const { cid } = req.params;
//         const newAssignment = {
//             ...req.body,
//             course: cid,
//             _id: new Date().getTime().toString(),
//         };
//         db.assignments.push(newAssignment);
//         res.send(newAssignment);
//     });

//     app.delete("/api/assignments/:aid", (req, res) => {
//         const { aid } = req.params;
//         db.assignments = db.assignments
//             .filter((a) => a._id !== aid);
//         res.sendStatus(200);
//     });

//     app.put("/api/assignments/:aid", (req, res) => {
//         const { aid } = req.params;
//         const assignmentIndex = db.assignments
//             .findIndex((a) => a._id === aid);
//         db.assignments[assignmentIndex] = {
//             ...db.assignments[assignmentIndex],
//             ...req.body
//         };
//         res.send(db.assignments[assignmentIndex])
//     });
// }