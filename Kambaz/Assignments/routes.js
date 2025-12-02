import AssignmentsDao from "./dao.js";

export default function AssignmentRoutes(app) {
    const dao = AssignmentsDao();
    const findAssignmentsForCourse = async (req, res) => {
        const { courseId } = req.params;
        const assignments = await dao.findAssignmentsForCourse(courseId);        
        res.json(assignments);
    }
    const createAssignmentForCourse = async (req, res) => {
        const { courseId } = req.params;
        const assignment = {
            ...req.body,
        };
        const newassignment = await dao.createAssignment(courseId, assignment);
        res.send(newassignment);
    }
    const deleteAssignment = async (req, res) => {
        const { courseId, assignmentId } = req.params;
        const status = await dao.deleteAssignment(courseId, assignmentId);
        res.send(status);
    }
    const updateAssignment = async (req, res) => {
        const { courseId, assignmentId } = req.params;
        const assignmentUpdates = req.body;
        const status = await dao.updateAssignment(courseId, assignmentId, assignmentUpdates);
        res.send(status);
    }
    app.delete("/api/courses/:courseId/assignments/:assignmentId", deleteAssignment);
    app.put("/api/courses/:courseId/assignments/:assignmentId", updateAssignment);
    app.get("/api/courses/:courseId/assignments", findAssignmentsForCourse);
    app.post("/api/courses/:courseId/assignments", createAssignmentForCourse);
}