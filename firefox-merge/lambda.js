let AWS = require('aws-sdk');
const kinesis = new AWS.Kinesis();


exports.handler = function (event, context, callback) {

    kinesis.putRecord({
        Data: '1',
        PartitionKey: '1',
        StreamName: 'testindunil'
    }).promise()
        .then(data => {
            // your logic goes here
        })
        .catch(err => {
            // error handling goes here
        });



    callback(null, { "message": "Successfully executed 1.3.2" });
}