/* 
Description:
  - Creates a table in DynamoDB.
*/

import AWS from "aws-sdk";

const ddb = new AWS.DynamoDB({
  endpoint: "http://localhost:8000",
  region: "local",
});

const params = {
  TableName: "Movies",
  KeySchema: [
    {
      AttributeName: "tconst",
      KeyType: "HASH",
    },
  ],
  AttributeDefinitions: [
    {
      AttributeName: "tconst",
      AttributeType: "S",
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1,
  },
  StreamSpecification: {
    StreamEnabled: false,
  },
};

ddb.createTable(params, (err, data) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Table created successfully!");
  }
});
