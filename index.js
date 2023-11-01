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

    return {
      statusCode: 200,
      body: JSON.stringify(AWS.DynamoDB.Converter.unmarshall(results.Item)),
    };
  } catch (err) {
    console.debug("ERROR!!!!");
    console.debug(err);
  }
}

handler().then((data) => console.debug(data));
