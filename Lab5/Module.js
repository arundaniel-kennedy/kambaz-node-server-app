const module = {
    "id": "M101",
    "name": "Introduction to Rocket Propulsion",
    "description": "Basic principles of rocket propulsion and rocket engines.",
    "course": "RS101",
};
export default function Module(app) {
    const getModule = (req, res) => {
        res.json(module);
    };
    const getModuleName = (req, res) => {
        res.json(module.name);
    };
    const setModuleName = (req, res) => {
        const { newTitle } = req.params;
        module.name = newTitle;
        res.json(module);
    };
    app.get("/lab5/module", getModule);
    app.get("/lab5/module/name", getModuleName);
    app.get("/lab5/module/name/:newTitle", setModuleName);
};
