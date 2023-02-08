import { ddb } from "./helpers/index.js";

async function getItem() {
  const params = {
    TableName: "Movies",
    IndexName: "TypesRegionIndex",
    KeyConditionExpression: "type = :type AND region = :region",
    FilterExpression: "#language = :language",
    ExpressionAttributeValues: {
      ":type": { S: "akas" },
      ":region": { S: "DE" },
      ExpressionAttributeNames: {
        "#type": "type",
        "#region": "region",
        "#language": "language",
      },
      ProjectionExpression: "title, #region, #language",
      //   FilterExpression: "#language = :language",
      //   ":language": { S: "de" }
      // },
    };

    try {
      const results = await ddb.query(params).promise();
      console.log(results.Items);
    } catch(error) {
      console.log(error);
    }
  };

  getItem();
