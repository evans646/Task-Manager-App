# Task-Manager-App
Simple full stack task manager Application to manager tedious tasks
<p>
    This project was created using 
</p>
<ul>
    <li>React.js</li>
    <li>Redux </li>
    <ul>
     <li>Redux thunks</li>
     <li>Redux reselect</li>
    </ul>
    <li>Node.js</li>
    <li>Epress.js</li>
</ul>
<p>
 And stored Tasks using <b>MySQL Database Management System</b>

This project explores Redux and its  ecosystems(<em>Redux-thunks</em>, <em>Redux reselect</em>) to manage the state of the Api requests to the backend
 as well as to accomplish the <b>CREATE</b>,<b>READ</b>, <b>UPDATE</b>, <b>DELETE</b> Functionalities using MYSQL Database 
 Management system. I used styled components to style the App without the need to use traditional CSS. 
</p>
<hr/>
<h3>SAMPLE PROJECT IMAGES</h3>
<hr/>
<img src="/images/image1.png" alt="" width="700">
<img src="/images/image2.png" alt="" width="700">
<img src="/images/image3.png" alt="" width="700">

<hr/>

<h3>MySQL Query to create a task</h3>

```
let SQL = `INSERT INTO tasks (id, text, isCompleted,createdAt)
         VALUES ('${insertedTask.id}','${insertedTask.text}',${insertedTask.isCompleted},${insertedTask.createdAt});
        `;
        db.query(SQL, function (err, result) {
            if (err) throw err;
            res.status(200).json(result); 
          });
        } else {
            res.status(400).json({ message: 'Request body should have a text property' });
        };
```

<h3>Query to get all tasks</h3>

```
let SQL = `SELECT * FROM tasks`;
            db.query(SQL, function (err, result) {
             if (err) res.send(err);
             res.status(200).json(result);   
      });
```
<h3>Query to update a task by marking it as complete</h3>

```
 const { id } = req.params;
    const sql = `UPDATE tasks SET isCompleted= true,dateCompleted=now() WHERE id =${id}`;
    db.query(sql, function (err, result) {
      if (err) throw err;
      res.status(200).json(result);
    });
```

<h3>Query to delete task</h3>

```
const { id } = req.params;
        const SQL = `DELETE FROM tasks WHERE id =${id}`;
         db.query(SQL, function (err, result) {
            if (err) throw err;
            res.status(200).json(result);
         });
```
You can view live site <a href="https://react-task-manager-0.herokuapp.com/" target="_blank">here</a>
