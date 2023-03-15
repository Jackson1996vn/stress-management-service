import { s3 } from './aws.service';
import { Injectable, Logger } from "@nestjs/common";
const dotenv = require("dotenv");
dotenv.config();

@Injectable()
export class UploadService {

    async upload(file) {
        const { originalname } = file;
        const bucketName = process.env.BUCKET_NAME;
        return await this.uploadS3(file.buffer, bucketName, originalname, file.mimetype);
    }

    async uploadS3(file, bucket, name, mimetype) {
        const params = {
            Bucket: bucket,
            Key: String(name),
            Body: file,
            ContentType: mimetype,
            ContentDisposition:"inline",
        };
        return new Promise((resolve, reject) => {
            s3.upload(params, (err, data) => {
                if (err) {
                    Logger.error(err);
                    reject(err.message);
                }
                resolve(data);
            });
        });
    }
}
