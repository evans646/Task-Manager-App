import getDbConnection from '../db';
const db = getDbConnection;

export const removeTaskRoute = {
    path: '/api/task/:id/',
    method: 'delete',
    handler: (req, res) => {
        const { id } = req.params;
        const SQL = `DELETE FROM tasks WHERE id =${id}`;
         db.query(SQL, function (err, result) {
            if (err) throw err;
            res.status(200).json(result);
          });
    } 
};