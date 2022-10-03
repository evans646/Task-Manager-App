import getDbConnection from '../db'; //import db and save it to a var 



export const testRoute = {
    path: '/api/test',
    method: 'get',
    handler: (req, res) => {
        // let db = getDbConnection;
        // // clause to query the db 
        // let sql = "SELECT * FROM reactMySQL";

        //  db.query(sql,(err,result) => {
        //    if(err) {
        //    console.log(err)
        //    }; 
        // res.send(result)
        // console.log(result)
        // }); 
        res.send('hmm')
    }     
};
