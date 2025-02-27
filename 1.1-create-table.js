import { ddb } from "./helpers/index.js";

const params = {
  TableName: "MoviesFull",
  KeySchema: [{
    AttributeName: 'tconst',
    KeyType: 'HASH',
  }],
  AttributeDefinitions: [{
    AttributeName: 'tconst',
    AttributeType: 'S',
  }],
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

