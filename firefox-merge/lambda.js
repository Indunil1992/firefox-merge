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
                    Data: `<p>This is a paragraph.</p>
<p>This is another paragraph.</p>`
                }
            },
            Subject: {
                Data: 'test 31/7/2019 prt 2'
            }
        },
        Source: 'hirudinee+aws@adroitlogic.com'
    }, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data);           // successful response
    });


    callback(null, { "message": "Successfully executed 1.3.2" });
}