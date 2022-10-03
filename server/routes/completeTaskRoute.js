import getDbConnection from "../db";
const db = getDbConnection;

export const completeTaskRoute = {
  path: "/api/task/:id/completed", 
  method: "post",
  handler: (req, res) => {
    const { id } = req.params;
    const sql = `UPDATE tasks SET isCompleted =true,dateCompleted=now() WHERE id =${id}`;
    db.query(sql, function (err, result) {
      if (err) throw err;
      res.status(200).json(result);
    });
  },
};

