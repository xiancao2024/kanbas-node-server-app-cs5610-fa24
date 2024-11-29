import * as assignmentsDao from "./dao.js";

export default function AssignmentRoutes(app) {
  // delete assignment
  app.delete("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const status = assignmentsDao.deleteAssignment(assignmentId);
    res.send(status);
  });

  // update assignment
  app.put("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const status = assignmentsDao.updateAssignment(
      assignmentId,
      assignmentUpdates
    );
    res.send(status);
  });
}
