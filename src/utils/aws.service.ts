import * as AWS from 'aws-sdk';
const dotenv = require("dotenv");
dotenv.config();

const credentials = new AWS.SharedIniFileCredentials({profile: 'default'});
AWS.config.credentials = credentials;

const s3 = new AWS.S3();
export {
    s3,
    AWS
}