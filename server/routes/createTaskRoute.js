import ShortUniqueId from 'short-unique-id';
import getDbConnection from '../db';
const db = getDbConnection;

const uid = new ShortUniqueId({
    dictionary: 'number',  
  });

export const createTaskRoute = {
    path: '/api/createtask',
    method: 'post',
    handler: (req, res) => {
         const { text } = req.body;
            if (text) {
            const insertedTask = { 
                id: uid(),
                isCompleted: false,
                createdAt:'now()',
                text}
         let SQL = `INSERT INTO tasks (id, text, isCompleted,createdAt)
             VALUES (${insertedTask.id},'${insertedTask.text}',${insertedTask.isCompleted},${insertedTask.createdAt});`;
         db.query(SQL, function (err, result) {
            if (err) throw err;
            res.status(200).json(result); 
          });
        } else {
            res.status(400).json({ message: 'Request body should have a text property' });
        }
    } 
};  