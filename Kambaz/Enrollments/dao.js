import { v4 as uuidv4 } from "uuid";
import model from "./model.js"

export default function EnrollmentsDao() {
    async function findCoursesForUser(userId) {
        const enrollments = await model.find({ user: userId }).populate("course");
        console.log(enrollments)
        return enrollments.map((enrollment) => enrollment.course);
    }
    async function findUsersForCourse(courseId) {
        const enrollments = await model.find({ course: courseId }).populate("user");
        return enrollments.map((enrollment) => enrollment.user);
    }
    function enrollUserInCourse(userId, courseId) {
        return model.create({
            user: userId,
            course: courseId,
            _id: `${userId}-${courseId}`,
        });
    }
    function unenrollUserFromCourse(user, course) {
        return model.deleteOne({ user, course });
    }
    function getEnrollmentsForCurrentUser(currentUserId) {
        return model.find({ user: currentUserId }, { user: 1, course: 1 });
    }
    function unenrollAllUsersFromCourse(courseId) {
        return model.deleteMany({ course: courseId });
    }
    return { enrollUserInCourse, getEnrollmentsForCurrentUser, findCoursesForUser, findUsersForCourse, unenrollUserFromCourse, unenrollAllUsersFromCourse };
}
