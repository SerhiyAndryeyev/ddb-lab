import AWS from "aws-sdk";

const ddb = new AWS.DynamoDB({
  endpoint: "http://localhost:8000",
  region: "local",
  accessKeyId: "xxxx",
  secretAccessKey: "xxxx",
});

export default ddb;
