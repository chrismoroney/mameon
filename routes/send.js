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
        service: 'Gmail',
        auth: {
          user: 'chris.moroney.mameon@gmail.com',
          pass: 'MAMEONmameon'
        }
    });
    
    
    var messageToCS="Customer message from: " + from + "\n\n" + body;
    var mailOptionsToCustomerService = {
        from:from, 
        to:'mameon.customer.service@gmail.com', 
        subject:"Customer's Message - " + subject,
        text:messageToCS,
    }

    var messageToCustomer="Hello, \n\nThank you for contacting us through our website. This email is sent to confirm that your message was sent to our customer " +
    "service team and we will respond as soon as we can! \n\nThank you again, \n MaMeOn";
    var mailOptionsToCustomer = {
        from:from, 
        to:from, 
        subject:"Mameon - Contact Confirmation",
        text:messageToCustomer,
    }

    transporter.sendMail(mailOptionsToCustomerService,function(error, info){
        if(error){
            console.log(error);
        } else {
            console.log("Email Sent: " + info.response);
        }
    });

    transporter.sendMail(mailOptionsToCustomer,function(error, info){
        if(error){
            console.log(error);
        } else {
            console.log("Email Sent: " + info.response);
        }
    });
});

module.exports = router;