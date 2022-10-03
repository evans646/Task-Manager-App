import mysql from 'mysql';


const getDbConnection = mysql.createPool('mysql://b4bca43db40445:ccb6dd33@us-cdbr-east-06.cleardb.net/heroku_d14966c03ff03a6?reconnect=true');
    


export default getDbConnection;

