let AWS = require('aws-sdk');
const ses = new AWS.SES();

exports.handler = function (event, context, callback) {

    ses.sendEmail({
        Destination: {
            ToAddresses: ['indunil@adroitlogic.com'],
            CcAddresses: [],
            BccAddresses: []
        },
        Message: {
            Body: {
                Html: {
                    Data: `<pre>
      My Bonnie lies over the ocean.
    
      My Bonnie lies over the sea.
    
      My Bonnie lies over the ocean.
    
      Oh, bring back my Bonnie to me.
    </pre>
    `
                }
            },
            Subject: {
                Data: '1/8/2019'
            }
        },
        Source: 'indunil@adroitlogic.com',
    }, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data);           // successful response
    });

    callback(null, { "message": "Successfully executed 1.3.2" });
}