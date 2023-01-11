const nodemailer = require('nodemailer');
const express = require('express');
const { response } = require('express');
const app = express();

function sendEmail(){
return new Promise((resolve,reject)=>{
    var mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'aswathy.k721@gmail.com',
            pass:'velayudhan'
        }
    });
    const mailDetails = {
        from: 'aswathy.k721@gmail.com',
        to: 'vijaynair2pgi@gmail.com',
        subject: 'Test mail',
        text: 'Nodemailer testing mail '
    };
    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            return reject({message:`Error Occured`});
        } else {
            return resolve({message:`Email sent successfully`});
        }
    });
})
}
app.get('/',(req,res)=>{
    sendEmail()
    .then(response=>res.send(res.message))
    .catch(error=>res.status(500).send(error.message))
})
app.listen(3000,()=>{
    console.log("Lstening to port 3000");
})





