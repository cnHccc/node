const mysql = require("mysql");

const db = mysql.createConnection({host:"localhost",port:"3306",user:"root",password:"password",database:"aaa"});

db.query("select * from `user_table`",(err,data)=>{
    console.log(data);
});