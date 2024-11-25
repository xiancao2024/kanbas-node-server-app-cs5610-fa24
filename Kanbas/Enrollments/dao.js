import Database from "../Database/index.js";
export function enrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    const newEnrollment = { _id: Date.now(), user: userId, course: courseId };
    enrollments.push(newEnrollment);
    return newEnrollment;
}
export function setEnrollments() {
    return Database.enrollments;
}
export function deleteEnrollments(userId, courseId) {
    const { enrollments } = Database;
    enrollments.filter((enrollment) => !(enrollment.user === userId && enrollment.course === courseId));
}
