import { v4 as uuidv4 } from "uuid";
export default function EnrollmentsDao(db) {
    function enrollUserInCourse(userId, courseId) {
        const { enrollments } = db;
        enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
    }
    function unEnrollUserFromCourse(courseId, currentUserId) {
        const { enrollments } = db;
        db.enrollments = enrollments.filter(
            (enrollment) => enrollment.course !== courseId &&
                enrollment.user === currentUserId
        )
    }
    function getEnrollmentsForCurrentUser(currentUserId) {
        const { enrollments } = db;
        return enrollments.filter(e => e.user === currentUserId)
    }
    return { enrollUserInCourse, unEnrollUserFromCourse, getEnrollmentsForCurrentUser };
}
