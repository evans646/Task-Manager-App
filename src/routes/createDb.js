import getDbConnection from '../db';




let db = getDbConnection;

export const createDb = {
    path: '/api/createdb',
    method: 'get',
    handler: (req, res) => {
        const DbtableSQL = `CREATE TABLE Users(
            email varchar(255),
            username varchar(255),
            passwordHash varchar(255),
            salt varchar(255),
            Country varchar(255),
            bio varchar(255)
        );`
    

        // let sql = 'CREATE DATABASE reactMySQLAuth';

        db.query(DbtableSQL, (err,result)=>{
            if(err) {
            console.log(err)
            } 
         res.send('Database created!')
        console.log(result)
        }); 

    }     
};


