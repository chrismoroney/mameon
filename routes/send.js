var express = require('express');
var cors = require('cors');
var nodemailer = require('nodemailer');
var router = express.Router();

var from;
var to;
var subject;
var body;

router.get('/', function(req, res, next) {
    res.sendFile('send.html', { root: 'views/.html/' });
});

router.post('/', cors(), function(req, res) {

    from=req.body.from;
    subject=req.body.subject;
    body=req.body.body;

    console.log(req.body);

    res.sendFile('send.html', {root: './views/.html/'});

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'chris.moroney.mameon@gmail.com',
          pass: 'MaMeOn123!@#'
        }
    });
    
    message="Customer message from: " + from + "\n\n" + body;


    var mailOptions = {
        from:from, 
        to:'christopher.moroney1@gmail.com', 
        subject:"Customer's Message - " + subject,
        text:message,
    }

    transporter.sendMail(mailOptions,function(error, info){
        if(error){
            console.log(error);
        } else {
            console.log("Email Send" + info.response);
        }
    });
});

module.exports = router;