let AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = function (event, context, callback) {
    s3.putObject({
        "Body": "test content",
        "Bucket": "indunil1",
        "Key": "1.jpg",
        "ServerSideEncryption": "AES256",
        "ACL": "public-read-write",
        "Tagging": "tg1=tgV1&tg2=tgV2",
        "Metadata": {
            "mt1": "mtV1",
            "mt2": "mtV2"
        }
    })
        .promise()
        .then(data => {
            console.log(data);           // successful response
            /*
            data = {
                ETag: "\"6805f2cfc46c0f04559748bb039d69ae\"",
                VersionId: "pSKidl4pHBiNwukdbcPXAIs.sshFFOc0"
            }
            */
        })
        .catch(err => {
            console.log(err, err.stack); // an error occurred
        });


    callback(null, { "message": "Successfully executed merge" });
}