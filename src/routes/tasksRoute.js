import getDbConnection from '../db';
const db = getDbConnection;

export const tasksRoute = {
    path: '/api/tasks',
    method: 'get',
    handler: (req, res) => {
        let SQL = `SELECT * FROM tasks`;
            db.query(SQL, function (err, result) {
                if (err) res.send(err);
                res.status(200).json(result);   
           });
    }};       
