const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend URL
    credentials: true // Enable credentials (if needed)
}));

const db = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'',
    database:'movieapp',

});

db.connect((err)=>{
    if(err){
        console.log('Error Connecting to the database:',err.stack);
        return;
    }
    console.log('Connected to the database'+ db.threadId);
})

app.get('/',(req,res)=>{
    return res.json("From Backend Side");
})


app.post('/register',(req,res) => {
    const {email,password} = req.body;

    if(!email || !password){
        return res.status(400).json({error:"Email and Password are required"});
    }

    const query = 'INSERT INTO register(email,password) VALUES (?,?)';
    db.query(query,[email,password],(err,result)=>{
        if(err){
            console.log('Error inserting data into the databse:',err.stack);
            return res.status(500).json({error:'Database error'});
        }
        return res.status(201).json({message:'User registered successfully'});
    });
});


app.listen(8000,()=>{
    console.log("server is listening on port 8000");
})