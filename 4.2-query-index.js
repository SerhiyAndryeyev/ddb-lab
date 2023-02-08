import { ddb } from "./helpers/index.js";

async function getItem() {
  const params = {
    TableName: "Movies",
    IndexName: "MovieRatingIndex",
    KeyConditionExpression: "sk = :sk AND averageRating > :averageRating",
    ExpressionAttributeValues: {
      ":sk": { S: "#MOVIE#" },
      ":averageRating": { N: "9" },
    },
    ScanIndexForward: false,
  };

  try {
    const results = await ddb.query(params).promise();
    console.log(results.Items);
  } catch (error) {
    console.log(error);
  }
}

getItem();
