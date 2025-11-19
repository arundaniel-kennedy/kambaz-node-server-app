import EnrollmentsDao from "./dao.js";

export default function EnrollmentRoutes(app, db) {
    const dao = EnrollmentsDao(db)
    const enrollCourse = (req, res) => {
        const { courseId } = req.params;
        const currentUser = req.session["currentUser"]
        dao.enrollUserInCourse(currentUser._id, courseId)
        res.json({})
    }
    const unEnrollCourse = (req, res) => {
        const { courseId } = req.params;
        const currentUser = req.session["currentUser"]
        dao.unEnrollUserFromCourse(courseId, currentUser._id)
        res.json({})
    }
    const getEnrollmentsForUser = (req, res) => {
        let { userId } = req.params;
        if (userId === "current") {
            userId = req.session["currentUser"]._id
        }
        return res.json(dao.getEnrollmentsForCurrentUser(userId))
    }
    app.post("/api/courses/:courseId/enroll", enrollCourse)
    app.post("/api/courses/:courseId/unenroll", unEnrollCourse)
    app.get("/api/enrollments/:userId", getEnrollmentsForUser)
}