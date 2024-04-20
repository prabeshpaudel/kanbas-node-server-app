import * as dao from "./dao.js";

export default function ModuleRoutes(app) {
    
    const deleteModule = async (req, res) => {
        const { mid } = req.params;
        await dao.deleteModule(mid);
        res.sendStatus(200);
    }

    const updateModule = async (req, res) => {
        const { mid } = req.params;
        await dao.updateModule(mid, req.body);
        res.sendStatus(204);
    }

    const createModule = async (req, res) => {
        const { cid } = req.params;
        const newModule = {
            ...req.body,
            course: cid,
        };
        const module = await dao.createModule(newModule);
        res.send(module);
    }

    const findModulesByCourse = async (req, res) => {
        const { cid } = req.params;
        const modules = await dao.findModulesByCourse(cid);
        res.send(modules);
    }

    app.delete("/api/modules/:mid", deleteModule);
    app.put("/api/modules/:mid", updateModule);
    app.post("/api/courses/:cid/modules", createModule);
    app.get("/api/courses/:cid/modules", findModulesByCourse);
}