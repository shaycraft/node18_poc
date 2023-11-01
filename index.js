import { default as AWS } from "aws-sdk";

export async function handler() {
  const client = new AWS.DynamoDB();

  try {
    const results = await client
      .getItem({
        TableName: "Attachments",
        Key: AWS.DynamoDB.Converter.marshall({
          REC_ID: "01H59D67PV21TDNK9Z5K5ACZJ3",
        }),
      })
      .promise();

    console.debug("results = ");
    console.debug(results);
  } catch (err) {
    console.debug("ERROR!!!!");
    console.debug(err);
  }
}

// module.exports.handler();
handler();
