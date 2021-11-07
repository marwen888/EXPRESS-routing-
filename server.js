
//module externe
const express=require("express");
const path = require('path');
//variables
const app= new express();
//middleware
const time=(request,response,next)=>{

    const realdate = new Date();
    var day=realdate.getDay()
    var hour=realdate.getHours()
     if ((day===6)||(day===7)||(hour>17)||(hour<9)){
       
        return response.sendFile(path.join(__dirname+'/public/closed.html'));
    }else{next()}
    }




app.use(time);


const PORT = 5000;

app.get('/',(request,response)=>{response.sendFile(__dirname+"/public/home.html")});
app.get('/contact',(request,response)=>{response.sendFile(__dirname+"/public/contact.html")});
app.get('/services',(request,response)=>{response.sendFile(__dirname+"/public/services.html")})
app.get('/style.css',(req,res)=>{res.sendFile(__dirname+'/public/style.css')})
app.listen(PORT,(err)=>err?console.log(err):console.log(`server running in port ${PORT}`))